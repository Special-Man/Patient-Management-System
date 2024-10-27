const addDoctor =  require('../models/DoctorModel');

const addNewDoctor = async (req, res) => {
  const { doctorName, contactNumber, email } = req.body;
  
  try {
    const newDoctor = await addDoctor(doctorName, contactNumber, email);
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while adding the doctor' });
  }
};

module.exports = { addNewDoctor };
