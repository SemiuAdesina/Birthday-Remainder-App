 Birthday Reminder App
Automate birthday greetings for your customers without using Excel!

📋 Project Description
As businesses grow, manually tracking customer birthdays in spreadsheets becomes inefficient.
This Birthday Reminder App provides an automated solution:

Collects customers' username, email, and birthday.

Saves user data into a database (MongoDB Atlas).

Runs a daily cron job at 7:00AM to check for today's birthdays.

Sends personalized Happy Birthday emails automatically via Gmail SMTP using Nodemailer.

Fully responsive, modern UI built with React and TailwindCSS.

🛠️ Tech Stack
Frontend
React (Vite)

TailwindCSS

Axios

React Toastify

FontAwesome Icons

Backend
Node.js

Express.js

MongoDB Atlas (Mongoose)

Nodemailer (Gmail SMTP)

Node-cron (Scheduled tasks)

📦 Features
🎂 Collect user information (Username, Email, Birthday)

🕒 Automatically check daily for birthdays at 7:00AM

✉️ Send beautifully designed Birthday Email

🎨 Modern UI with animated gradient background

📱 Mobile responsive design

🛡️ .env secured (Environment variables are protected)

🖥️ Ready for deployment on Render, Vercel, or any server

🏗️ Folder Structure
plaintext
Copy
Edit
/birthday-reminder-app
 ├── /backend
 │    ├── /config
 │    ├── /controllers
 │    ├── /cron
 │    ├── /emails
 │    ├── /models
 │    ├── /routes
 │    ├── .env (ignored)
 │    └── server.js
 ├── /frontend
 │    ├── /src
 │    │     ├── /components
 │    │     ├── /pages
 │    │     ├── /services
 │    │     ├── /utils
 │    │     ├── App.jsx
 │    │     └── main.jsx
 │    └── vite.config.js
 └── README.md
⚙️ Setup Instructions
Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file inside /backend:

plaintext
Copy
Edit
PORT=5003
MONGO_URI=your-mongodb-atlas-uri
EMAIL_USER=your-gmail-address
EMAIL_PASS=your-gmail-app-password
Start backend server:

bash
Copy
Edit
npm run dev
or

bash
Copy
Edit
nodemon server.js
Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
Visit your app at http://localhost:5173 (or whatever port Vite assigns).

Cron Job Details
Runs every day at 7AM Africa/Lagos timezone.

Checks if any user's birthday matches today's date.

Sends an automatic personalized Happy Birthday email via Nodemailer.

🛡️ Important Notes
Do NOT push your .env file to GitHub.

Use Gmail App Password (NOT real Gmail password) for Nodemailer authentication.

Environment variables (MONGO_URI, EMAIL_USER, EMAIL_PASS) must be configured manually on production servers.

🙏 Acknowledgements
TailwindCSS

Nodemailer

MongoDB Atlas

React Toastify