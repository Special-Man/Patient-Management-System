// controllers/medsController.js
const { insertMedicine, getMedicines, updateMedicine, deleteMedicine } = require('../models/medsModel');

const addMedicine = async (req, res) => {
  const { name, manufacturer, dosage, price, expiration_date } = req.body;

  try {
    const newMedicine = await insertMedicine(name, manufacturer, dosage, price, expiration_date);
    res.status(201).json({ message: 'Medicine added successfully', medicine: newMedicine });
  } catch (error) {
    console.error('Error adding medicine:', error.message);
    res.status(500).json({ error: 'An error occurred while adding the medicine' });
  }
};

const fetchMedicines = async (req, res) => {
  try {
    const medicines = await getMedicines();
    res.status(200).json(medicines);
  } catch (error) {
    console.error('Error fetching medicines:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching medicines' });
  }
};

const editMedicine = async (req, res) => {
  const { id } = req.params;
  const { name, manufacturer, dosage, price, expiration_date } = req.body;

  try {
    const updatedMedicine = await updateMedicine(id, name, manufacturer, dosage, price, expiration_date);
    if (updatedMedicine) {
      res.status(200).json({ message: 'Medicine updated successfully', medicine: updatedMedicine });
    } else {
      res.status(404).json({ error: 'Medicine not found' });
    }
  } catch (error) {
    console.error('Error updating medicine:', error.message);
    res.status(500).json({ error: 'An error occurred while updating the medicine' });
  }
};

const removeMedicine = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMedicine = await deleteMedicine(id);
    if (deletedMedicine) {
      res.status(200).json({ message: 'Medicine deleted successfully', medicine: deletedMedicine });
    } else {
      res.status(404).json({ error: 'Medicine not found' });
    }
  } catch (error) {
    console.error('Error deleting medicine:', error.message);
    res.status(500).json({ error: 'An error occurred while deleting the medicine' });
  }
};

module.exports = { addMedicine, fetchMedicines, editMedicine, removeMedicine };
