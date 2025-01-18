// routes/medsRoutes.js
const express = require('express');
const { addMedicine, fetchMedicines, editMedicine, removeMedicine } = require('../controllers/medsController');

const router = express.Router();

// Route to add a new medicine (POST request)
router.post('/', addMedicine);

// Route to get all medicines (GET request)
router.get('/', fetchMedicines);

// Route to update medicine details (PUT request)
router.put('/:id', editMedicine);

// Route to delete a medicine (DELETE request)
router.delete('/:id', removeMedicine);

module.exports = router;
