// controllers/patientController.js
const { insertPatient, getPatients, updatePatient, deletePatient } = require('../models/patientModel');

const addPatient = async (req, res) => {
  const { patient_name, contact_number, email, password } = req.body;

  try {
    const newPatient = await insertPatient(patient_name, contact_number, email, password);
    res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
  } catch (error) {
    console.error('Error adding patient:', error.message);
    res.status(500).json({ error: 'An error occurred while adding the patient' });
  }
};

const fetchPatients = async (req, res) => {
  try {
    const patients = await getPatients();
    res.status(200).json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching patients' });
  }
};

const editPatient = async (req, res) => {
  const { id } = req.params;
  const { patient_name, contact_number, email, password } = req.body;

  try {
    const updatedPatient = await updatePatient(id, patient_name, contact_number, email, password);
    if (updatedPatient) {
      res.status(200).json({ message: 'Patient updated successfully', patient: updatedPatient });
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error('Error updating patient:', error.message);
    res.status(500).json({ error: 'An error occurred while updating the patient' });
  }
};

// Delete controller to remove a patient by ID
const removePatient = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPatient = await deletePatient(id);
    if (deletedPatient) {
      res.status(200).json({ message: 'Patient deleted successfully', patient: deletedPatient });
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error('Error deleting patient:', error.message);
    res.status(500).json({ error: 'An error occurred while deleting the patient' });
  }
};

module.exports = { addPatient, fetchPatients, editPatient, removePatient };
