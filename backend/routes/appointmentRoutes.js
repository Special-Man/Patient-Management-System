const express = require('express');
const {
  getAllAppointments,
  fetchAppointmentsByPatientId,
  fetchAppointmentsByDoctorId,
  addAppointment,
  deleteAppointmentById,
} = require('../controllers/appointmentController');

const router = express.Router();

router.get('/', getAllAppointments); // Get all appointments
router.get('/patient/:patientId', fetchAppointmentsByPatientId); // Get appointments by patient ID
router.get('/doctor/:doctorId', fetchAppointmentsByDoctorId); // Get appointments by doctor ID
router.post('/', addAppointment); // Add a new appointment
router.delete('/:id', deleteAppointmentById); // Delete an appointment by ID

module.exports = router;
