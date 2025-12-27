const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    rating: Number,
    message: String,
}, { timestamps: true });
module.exports = mongoose.model('Feedback', FeedbackSchema);