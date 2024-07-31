// src/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// Login route
router.post('/login', login);

// Registration route
router.post('/register', register);

module.exports = router;
