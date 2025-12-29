const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }, // Admin form mein ye hona lazmi tha
    price: { type: Number, required: true },
    language: { type: String, enum: ['Urdu', 'English'], default: 'Urdu' },
    image: { type: String, required: true },
    category: { type: String },
    reviews: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
