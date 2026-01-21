// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const helmet = require('helmet'); // Security header
// const rateLimit = require('express-rate-limit'); // Attack protection
// require('dotenv').config();

// const app = express();

// // Security Middlewares - Updated for Vercel
// app.use(helmet({
//   contentSecurityPolicy: false, // CSP ko disable kiya taake images load ho saken
//   crossOriginResourcePolicy: false
// }));

// // CORS Configuration - Fixed: Sab origins ko allow kar diya taake preview links bhi chalen
// app.use(cors({
//   origin: "*", 
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

// app.use(express.json());

// // Rate Limiter: Ek IP se 15 minute mein sirf 100 requests
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100,
//   message: "Zyada requests ki wajah se aap block hain, thori dair baad koshish karein."
// });
// app.use('/api/', limiter);

// // Routes
// const authRoutes = require('./routes/authRoutes');
// const bookRoutes = require('./routes/bookRoutes');

// app.use('/api/auth', authRoutes);
// app.use('/api/books', bookRoutes);

// // Database Connection
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => console.log("Critixo Secure DB Connected"))
// .catch((err) => {
//   console.log("DB Connection Error detail:", err.message);
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Professional Server running on ${PORT}`));

// module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: false
}));

// CORS Configuration
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later."
});
app.use('/api/', limiter);

// Routes Imports
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

// Routes Usage
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Critixo Secure DB Connected"))
.catch((err) => console.log("DB Connection Error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
