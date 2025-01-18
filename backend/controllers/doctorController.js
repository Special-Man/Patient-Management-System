// controllers/doctorController.js
const { password } = require('pg/lib/defaults');
const { insertDoctor, getDoctors, updateDoctor, deleteDoctor } = require('../models/DoctorModel');

const addDoctor = async (req, res) => {
  const { doctor_name, contact_number, email, password } = req.body;

  try {
    const newDoctor = await insertDoctor(doctor_name, contact_number, email, password);
    res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
  } catch (error) {
    console.error('Error adding doctor:', error.message);
    res.status(500).json({ error: 'An error occurred while adding the doctor' });
  }
};

const fetchDoctors = async (req, res) => {
  try {
    const doctors = await getDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching doctors' });
  }
};

const editDoctor = async (req, res) => {
  const { id } = req.params;
  const { doctor_name, contact_number, email, password } = req.body;

  try {
    const updatedDoctor = await updateDoctor(id, doctor_name, contact_number, email, password);
    if (updatedDoctor) {
      res.status(200).json({ message: 'Doctor updated successfully', doctor: updatedDoctor });
    } else {
      res.status(404).json({ error: 'Doctor not found' });
    }
  } catch (error) {
    console.error('Error updating doctor:', error.message);
    res.status(500).json({ error: 'An error occurred while updating the doctor' });
  }
};

// Delete controller to remove a doctor by ID
const removeDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDoctor = await deleteDoctor(id);
    if (deletedDoctor) {
      res.status(200).json({ message: 'Doctor deleted successfully', doctor: deletedDoctor });
    } else {
      res.status(404).json({ error: 'Doctor not found' });
    }
  } catch (error) {
    console.error('Error deleting doctor:', error.message);
    res.status(500).json({ error: 'An error occurred while deleting the doctor' });
  }
};

module.exports = { addDoctor, fetchDoctors, editDoctor, removeDoctor };
