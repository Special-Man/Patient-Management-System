// routes/doctorRoutes.js
const express = require('express');
const { addDoctor, fetchDoctors, editDoctor } = require('../controllers/doctorController');

const router = express.Router();

// Route to add a new doctor (POST request)
router.post('/', addDoctor);

// Route to get all doctors (GET request)
router.get('/', fetchDoctors);

// Route to update doctor details (PUT request)
router.put('/:id', editDoctor);

module.exports = router;
