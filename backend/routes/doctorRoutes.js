import express from 'express';
import DoctorController from '../controllers/DoctorController.js';

const router = express.Router();

// Define the POST route for adding a new doctor
router.post('/add', DoctorController.addDoctor);

export default router;
