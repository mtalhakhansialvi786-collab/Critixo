const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Request = require('../models/Request');

// 1. Get All Books
router.get('/all', async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 2. Add New Book
router.post('/add', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 3. Edit Book (Update)
router.put('/edit/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
        );
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 4. Delete Book
router.delete('/delete/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json("Book has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

// 5. Get User Requests
router.get('/requests', async (req, res) => {
    try {
        const requests = await Request.find().sort({ createdAt: -1 });
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;