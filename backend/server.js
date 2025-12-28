const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet'); // Security header
const rateLimit = require('express-rate-limit'); // Attack protection
require('dotenv').config();

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiter: Ek IP se 15 minute mein sirf 100 requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Zyada requests ki wajah se aap block hain, thori dair baad koshish karein."
});
app.use('/api/', limiter);

// Routes
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// --- TABDEELI YAHAN HAI ---
// MONGO_URI ko MONGODB_URI kiya gaya hai taake Vercel environment variables se match kare
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Critixo Secure DB Connected"))
.catch((err) => {
  console.log("DB Connection Error detail:", err.message);
});
// --------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Professional Server running on ${PORT}`));

module.exports = app;
