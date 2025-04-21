// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const birthdayJob = require('./cron/birthdayJob');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5003;

// Middlewares
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// Routes
app.use('/api/users', userRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('🎂 Birthday Reminder API is Running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// Start Cron job
birthdayJob.start();
