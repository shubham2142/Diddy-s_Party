const express = require('express');
const { register, login } = require('../controllers/authController'); // Adjust this path if necessary

const router = express.Router();

// Register route (POST)
router.post('/register', register);

// Login route (POST)
router.post('/login', login);

module.exports = router;
