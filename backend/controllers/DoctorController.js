import DoctorModel from '../models/DoctorModel.js';

class DoctorController {
  static async addDoctor(req, res) {
    const { name, contactNumber, email } = req.body;
    
    if (!name || !contactNumber || !email) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
    
    try {
      const newDoctor = await DoctorModel.addDoctor(name, contactNumber, email);
      res.status(201).json(newDoctor);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add doctor', error: error.message });
    }
  }
}

export default DoctorController;
