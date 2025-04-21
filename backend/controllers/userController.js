const User = require('../models/User');

// @desc    Create new user (Birthday Entry)
// @route   POST /api/users
// @access  Public
const createUser = async (req, res) => {
  try {
    const { username, email, birthday } = req.body;

    if (!username || !email || !birthday) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const user = await User.create({ username, email, birthday });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createUser,
};
