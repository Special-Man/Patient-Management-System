const express = require('express');
const {
  fetchAllMedicines,
  fetchMedicineById,
  createMedicine,
  editMedicine,
  deleteMedicine,
} = require('../controllers/medicineController');

const router = express.Router();

// Get all medicines
router.get('/', fetchAllMedicines);

// Get a single medicine by ID
router.get('/:id', fetchMedicineById);

// Add a new medicine
router.post('/', createMedicine);

// Update an existing medicine
router.put('/:id', editMedicine);

// Soft delete a medicine
router.delete('/:id', deleteMedicine);

module.exports = router;
