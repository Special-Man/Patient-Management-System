const {
  getAllPatients,
  getPatientById,
  addPatient,
  updatePatient,
  softDeletePatient,
  findPatientByEmail,
} = require('../models/patientModel');
const bcrypt = require('bcrypt');

// Get all patients
const fetchAllPatients = async (req, res) => {
  try {
    const patients = await getAllPatients();
    res.status(200).json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

// Get a single patient by ID
const fetchPatientById = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await getPatientById(id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error('Error fetching patient:', error);
    res.status(500).json({ error: 'Failed to fetch patient' });
  }
};

// Add a new patient
const createPatient = async (req, res) => {
  const { first_name, last_name, address, phone_number, email, age, password } = req.body;

  try {
    // Call the model to add the patient
    const newPatient = await addPatient(first_name, last_name, address, phone_number, email, age, password);
    res.status(201).json(newPatient);
  } catch (error) {
    console.error('Error creating patient:', error.message);
    res.status(500).json({ error: 'An error occurred while creating the patient' });
  }
};

// Update a patient
const editPatient = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPatient = await updatePatient(id, req.body);
    if (!updatedPatient) {
      return res.status(404).json({ error: 'Patient not found or deleted' });
    }
    res.status(200).json(updatedPatient);
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ error: 'Failed to update patient' });
  }
};

// Soft delete a patient
const deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPatient = await softDeletePatient(id);
    if (!deletedPatient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient marked as deleted', deletedPatient });
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).json({ error: 'Failed to delete patient' });
  }
};

// Patient login
const loginPatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await findPatientByEmail(email);
    if (!patient) {
      return res.status(404).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, patient.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', patient: { id: patient.id, email: patient.email } });
  } catch (error) {
    console.error('Error logging in patient:', error);
    res.status(500).json({ error: 'Failed to log in' });
  }
};

module.exports = {
  fetchAllPatients,
  fetchPatientById,
  createPatient,
  editPatient,
  deletePatient,
  loginPatient,
};
