// controllers/doctorController.js
const { insertDoctor, getDoctors } = require('../models/doctorModel');

const addDoctor = async (req, res) => {
  const { doctor_name, contact_number, email } = req.body;

  try {
    const newDoctor = await insertDoctor(doctor_name, contact_number, email);
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

module.exports = { addDoctor, fetchDoctors };
