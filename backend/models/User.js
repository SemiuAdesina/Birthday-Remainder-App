const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // prevent duplicate emails
  },
  birthday: {
    type: Date,
    required: [true, 'Birthday is required'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
