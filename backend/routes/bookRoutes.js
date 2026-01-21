// const express = require('express');
// const router = express.Router();
// const Book = require('../models/Book');
// const Request = require('../models/Request');

// // 1. Get All Books
// router.get('/all', async (req, res) => {
//     try {
//         const books = await Book.find().sort({ createdAt: -1 });
//         res.json(books);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // 2. Add New Book
// router.post('/add', async (req, res) => {
//     try {
//         const newBook = new Book(req.body);
//         const savedBook = await newBook.save();
//         res.status(200).json(savedBook);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // 3. Edit Book (Update)
// router.put('/edit/:id', async (req, res) => {
//     try {
//         const updatedBook = await Book.findByIdAndUpdate(
//             req.params.id, 
//             { $set: req.body }, 
//             { new: true }
//         );
//         res.status(200).json(updatedBook);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // 4. Delete Book
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         await Book.findByIdAndDelete(req.params.id);
//         res.status(200).json("Book has been deleted...");
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // 5. Get User Requests
// router.get('/requests', async (req, res) => {
//     try {
//         const requests = await Request.find().sort({ createdAt: -1 });
//         res.status(200).json(requests);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Request = require('../models/Request');
const Feedback = require('../models/Feedback'); // Feedback model import confirmed

// ==========================================
// 1. BOOK ROUTES
// ==========================================

// Get All Books
router.get('/all', async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Add New Book
router.post('/add', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Edit Book (Update)
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

// Delete Book
router.delete('/delete/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json("Book has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

// ==========================================
// 2. USER REQUESTS ROUTES
// ==========================================

router.get('/requests', async (req, res) => {
    try {
        const requests = await Request.find().sort({ createdAt: -1 });
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ==========================================
// 3. USER FEEDBACK ROUTES (NEWLY ADDED)
// ==========================================

// A: Get All Feedbacks (Admin Panel ke liye)
router.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: "Could not fetch feedback" });
    }
});

// B: Submit New Feedback (Footer ke liye)
router.post('/feedback', async (req, res) => {
    try {
        const newFeedback = new Feedback({
            message: req.body.message,
            userEmail: req.body.userEmail || "Anonymous", 
            userName: req.body.userName || "Guest",
            rating: req.body.rating || 5
        });
        const savedFeedback = await newFeedback.save();
        res.status(200).json(savedFeedback);
    } catch (err) {
        res.status(500).json({ error: "Failed to save feedback" });
    }
});

// C: Delete Feedback (Admin Panel ke liye)
router.delete('/feedback/:id', async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.status(200).json("Feedback deleted successfully");
    } catch (err) {
        res.status(500).json({ error: "Delete failed" });
    }
});

module.exports = router;
