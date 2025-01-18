const {
  getAllMedicines,
  getMedicineById,
  addMedicine,
  updateMedicine,
  softDeleteMedicine,
} = require('../models/medicineModel');

// Get all medicines
const fetchAllMedicines = async (req, res) => {
  try {
    const medicines = await getAllMedicines();
    res.status(200).json(medicines);
  } catch (error) {
    console.error('Error fetching medicines:', error);
    res.status(500).json({ error: 'Failed to fetch medicines' });
  }
};

// Get a single medicine by ID
const fetchMedicineById = async (req, res) => {
  const { id } = req.params;
  try {
    const medicine = await getMedicineById(id);
    if (!medicine) {
      return res.status(404).json({ error: 'Medicine not found' });
    }
    res.status(200).json(medicine);
  } catch (error) {
    console.error('Error fetching medicine:', error);
    res.status(500).json({ error: 'Failed to fetch medicine' });
  }
};

// Add a new medicine
const createMedicine = async (req, res) => {
  const { name, manufacturer, price } = req.body;
  try {
    const medicine = await addMedicine(name, manufacturer, price);
    res.status(201).json(medicine);
  } catch (error) {
    console.error('Error creating medicine:', error);
    res.status(500).json({ error: 'Failed to create medicine' });
  }
};

// Update a medicine
const editMedicine = async (req, res) => {
  const { id } = req.params;
  const { name, manufacturer, price } = req.body;
  try {
    const medicine = await updateMedicine(id, name, manufacturer, price);
    if (!medicine) {
      return res.status(404).json({ error: 'Medicine not found or deleted' });
    }
    res.status(200).json(medicine);
  } catch (error) {
    console.error('Error updating medicine:', error);
    res.status(500).json({ error: 'Failed to update medicine' });
  }
};

// Soft delete a medicine
const deleteMedicine = async (req, res) => {
  const { id } = req.params;
  try {
    const medicine = await softDeleteMedicine(id);
    if (!medicine) {
      return res.status(404).json({ error: 'Medicine not found' });
    }
    res.status(200).json({ message: 'Medicine marked as deleted', medicine });
  } catch (error) {
    console.error('Error deleting medicine:', error);
    res.status(500).json({ error: 'Failed to delete medicine' });
  }
};

module.exports = {
  fetchAllMedicines,
  fetchMedicineById,
  createMedicine,
  editMedicine,
  deleteMedicine,
};
