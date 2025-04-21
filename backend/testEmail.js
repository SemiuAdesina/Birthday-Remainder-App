const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const sendBirthdayWish = require('./emails/sendBirthdayWish');

dotenv.config();

const runTest = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected for testing');

    const user = await User.findOne(); // just pick any user from database
    if (user) {
      await sendBirthdayWish(user);
      console.log('✅ Test email sent!');
    } else {
      console.log('❌ No users found in database');
    }

    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error sending test email:', err.message);
  }
};

runTest();
