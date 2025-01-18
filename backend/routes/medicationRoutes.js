const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');

router.get('/', medicationController.getAllMedications);
router.get('/:id', medicationController.getMedicationById);
router.post('/', medicationController.addMedication);
router.put('/:id', medicationController.updateMedication);
router.delete('/:id', medicationController.deleteMedication);
router.get('/patient/:id', medicationController.getMedicationsByPatientId);

module.exports = router;
