const express = require('express');
const router = express.Router(); // Ye line miss thi
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    try {
        // .trim() lagane se extra spaces ka khatam ho jati hain
        const email = req.body.email ? req.body.email.trim() : "";
        const password = req.body.password ? req.body.password.trim() : "";

        console.log("Login attempt for:", email);

        if (email === "admin@critixo.com" && password === "admin123") {
            // Secret key ke liye .env use karein ya default rakhein
            const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1d' });
            return res.json({ success: true, token });
        } else {
            return res.status(401).json({ success: false, message: "Ghalat Email ya Password!" });
        }
    } catch (error) {
        console.error("Auth Error:", error);
        res.status(500).json({ message: "Server mein masla hai" });
    }
});

module.exports = router; // Ye line bhi zaroori hai