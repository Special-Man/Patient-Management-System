const express = require('express');
const {
  addDoctor,
  fetchAllDoctors,
  fetchDoctorById,
  modifyDoctor,
  removeDoctor,
  loginDoctor,
} = require('../controllers/DoctorController');

const router = express.Router();

router.post('/doctors', addDoctor); // Create a new doctor
router.get('/doctors', fetchAllDoctors); // Get all doctors
router.get('/doctors/:id', fetchDoctorById); // Get a doctor by ID
router.put('/doctors/:id', modifyDoctor); // Update a doctor
router.delete('/doctors/:id', removeDoctor); // Delete a doctor
router.post('/doctors/login', loginDoctor);

module.exports = router;
