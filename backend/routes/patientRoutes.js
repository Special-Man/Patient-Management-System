// routes/patientRoutes.js
const express = require('express');
const { addPatient, fetchPatients, editPatient, removePatient } = require('../controllers/patientController');

const router = express.Router();

// Route to add a new patient (POST request)
router.post('/', addPatient);

// Route to get all patients (GET request)
router.get('/', fetchPatients);

// Route to update patient details (PUT request)
router.put('/:id', editPatient);

// Route to delete a patient (DELETE request)
router.delete('/:id', removePatient);

module.exports = router;
