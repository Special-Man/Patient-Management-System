const express = require('express');
const { DoctorController } = require('../controllers/DoctorController');

const router = express.Router();

// Define the POST route for adding a new doctor
router.post('/add', DoctorController.addDoctor);

module.exports = router;
