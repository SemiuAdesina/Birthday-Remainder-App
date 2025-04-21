const cron = require('node-cron');
const User = require('../models/User');
const sendBirthdayWish = require('../emails/sendBirthdayWish');

const birthdayJob = cron.schedule('0 7 * * *', async () => {
  console.log("⏰ Running Birthday Job...");

  const today = new Date();
  const month = today.getMonth() + 1; // JS months are 0-indexed
  const day = today.getDate();

  try {
    const users = await User.find();
    const celebrants = users.filter((user) => {
      const userBirthday = new Date(user.birthday);
      return (userBirthday.getDate() === day && (userBirthday.getMonth() + 1) === month);
    });

    if (celebrants.length === 0) {
      console.log("😢 No birthdays today.");
    }

    for (const celebrant of celebrants) {
      await sendBirthdayWish(celebrant);
    }
  } catch (error) {
    console.error("❌ Error running birthday job:", error.message);
  }
}, {
  timezone: "Africa/Lagos", // IMPORTANT: Set your timezone
});

module.exports = birthdayJob;
