const nodemailer = require('nodemailer');

const sendBirthdayWish = async (user) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Birthday Reminder 🎂" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "🎉 Happy Birthday!",
    html: `
      <div style="text-align: center; padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: #fc466b;">🎂 Happy Birthday, ${user.username}!</h1>
        <p>We wish you all the happiness and success you deserve!</p>
        <p style="margin-top: 20px;">Have a fantastic day! 🎉🎉</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`🎉 Email sent successfully to ${user.email}`);
  } catch (error) {
    console.error(`❌ Failed to send email to ${user.email}:`, error.message);
  }
};

module.exports = sendBirthdayWish;
