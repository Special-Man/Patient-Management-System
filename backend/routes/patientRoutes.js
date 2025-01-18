const express = require('express');
const {
  fetchAllPatients,
  fetchPatientById,
  createPatient,
  editPatient,
  deletePatient,
  loginPatient,
} = require('../controllers/patientController');

const router = express.Router();

// Get all patients
router.get('/', fetchAllPatients);

// Get a single patient by ID
router.get('/:id', fetchPatientById);

// Add a new patient
router.post('/', createPatient);

// Update an existing patient
router.put('/:id', editPatient);

// Soft delete a patient
router.delete('/:id', deletePatient);

// Patient login
router.post('/login', loginPatient);

module.exports = router;
