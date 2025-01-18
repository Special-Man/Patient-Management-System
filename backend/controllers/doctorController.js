const {
    createDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor,
    getDoctorByEmail,
  } = require('../models/DoctorModel');
  
  const bcrypt = require('bcrypt');

  const loginDoctor = async (req, res) => {
    const { id, email, password } = req.body;
  
    try {
      const doctor = await getDoctorByEmail(email);
  
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, doctor.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Return success response (you can also generate a token if required)
      res.status(200).json({ message: 'Login successful', doctorId: doctor.id });
    } catch (error) {
      console.error('Error logging in doctor:', error);
      res.status(500).json({ error: 'An error occurred while logging in' });
    }
  };
  
  // Create a new doctor
  const addDoctor = async (req, res) => {
    try {
      const newDoctor = await createDoctor(req.body);
      res.status(201).json(newDoctor);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error creating a new doctor' });
    }
  };
  
  // Get all doctors
  const fetchAllDoctors = async (req, res) => {
    try {
      const doctors = await getAllDoctors();
      res.status(200).json(doctors);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error fetching doctors' });
    }
  };
  
  // Get a doctor by ID
  const fetchDoctorById = async (req, res) => {
    try {
      const doctor = await getDoctorById(req.params.id);
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
      res.status(200).json(doctor);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error fetching doctor' });
    }
  };
  
  // Update a doctor
  const modifyDoctor = async (req, res) => {
    try {
      const updatedDoctor = await updateDoctor(req.params.id, req.body);
      if (!updatedDoctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
      res.status(200).json(updatedDoctor);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error updating doctor' });
    }
  };
  
  // Delete a doctor
  const removeDoctor = async (req, res) => {
    try {
      const deletedDoctor = await deleteDoctor(req.params.id);
      if (!deletedDoctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
      res.status(200).json(deletedDoctor);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error deleting doctor' });
    }
  };
  
  module.exports = {
    addDoctor,
    fetchAllDoctors,
    fetchDoctorById,
    modifyDoctor,
    removeDoctor,
    loginDoctor,
  };
  