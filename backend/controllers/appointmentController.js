const appointmentModel = require('../models/appointmentModel');

// Fetch all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentModel.getAllAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch appointments by patient ID
const fetchAppointmentsByPatientId = async (req, res) => {
  const { patientId } = req.params;
  try {
    const appointments = await appointmentModel.getAppointmentsByPatientId(patientId);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch appointments by doctor ID
const fetchAppointmentsByDoctorId = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const appointments = await appointmentModel.getAppointmentsByDoctorId(doctorId);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new appointment
const addAppointment = async (req, res) => {
  try {
    const appointment = req.body; // Expect entire payload
    const newAppointment = await appointmentModel.createAppointment(appointment);
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an appointment
const deleteAppointmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAppointment = await appointmentModel.deleteAppointmentById(id);
    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json(deletedAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAppointments,
  fetchAppointmentsByPatientId,
  fetchAppointmentsByDoctorId,
  addAppointment,
  deleteAppointmentById,
};
