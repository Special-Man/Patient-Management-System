// server.js
const express = require('express');
const cors = require('cors');
const superadminRoutes = require('./routes/superadminRoutes');
const patientRoutes = require('./routes/patientRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const bodyParser = require('body-parser');

const doctorRoutes = require('./routes/doctorRoutes');
const medicationRoutes = require('./routes/medicationRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests

// CORS configuration
app.use(cors({
  origin: "*", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded form data
// Use the routes with updated paths
app.use('/api', superadminRoutes);
 // All doctor CRUD operations will go under /api/doctors
 app.use('/api', doctorRoutes);
 app.use('/api/medicines', medicineRoutes);
 app.use('/api/medication', medicationRoutes);
 app.use('/api/appointment', appointmentRoutes);


app.use('/api/patients', patientRoutes); // All doctor CRUD operations will go under /api/doctors

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
