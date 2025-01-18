const medicationModel = require('../models/medicationModel');

// Get all medication schedules
const getAllMedications = async (req, res) => {
  try {
    const medications = await medicationModel.getAllMedications();
    res.status(200).json(medications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single medication schedule by ID
const getMedicationById = async (req, res) => {
  const { id } = req.params;
  try {
    const medication = await medicationModel.getMedicationById(id);
    if (!medication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.status(200).json(medication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMedicationsByPatientId = async (req, res) => {
    try {
      const { id: patientId } = req.params;
      const medications = await medicationModel.getMedicationsByPatientId(patientId);
      res.status(200).json(medications);
    } catch (error) {
      console.error("Error fetching medications:", error.message);
      res.status(500).json({ error: error.message });
    }
  };

// Add a new medication schedule
const addMedication = async (req, res) => {
    try {
      console.log("Incoming payload:", req.body); // Debug log
  
      const medication = req.body;
  
      const newMedication = await medicationModel.createMedication(medication);
      console.log("Inserted medication:", newMedication);
  
      res.status(201).json(newMedication);
    } catch (error) {
      console.error("Error inserting medication:", error.message);
      res.status(500).json({ error: error.message });
    }
  };

// Update a medication schedule
const updateMedication = async (req, res) => {
  const { id } = req.params;
  const { m_id, time1, time2, time3 } = req.body;
  try {
    const updatedMedication = await medicationModel.updateMedication(id, { m_id, time1, time2, time3 });
    if (!updatedMedication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.status(200).json(updatedMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a medication schedule
const deleteMedication = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMedication = await medicationModel.deleteMedication(id);
    if (!deletedMedication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.status(200).json(deletedMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMedications,
  getMedicationById,
  addMedication,
  updateMedication,
  deleteMedication,
  getMedicationsByPatientId,
};
