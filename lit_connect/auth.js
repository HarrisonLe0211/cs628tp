const express = require('express');
const User = require('./user');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json('User registered successfully');
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) return res.status(400).json('Invalid credentials');
        res.json('Login successful');
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = router;
