// routes/doctorRoutes.js
const express = require('express');
const { addDoctor, fetchDoctors } = require('../controllers/doctorController');

const router = express.Router();

// Route to add a new doctor (POST request)
router.post('/', addDoctor);

// Route to get all doctors (GET request)
router.get('/', fetchDoctors);

module.exports = router;
