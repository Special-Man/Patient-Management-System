// server.js
const express = require('express');
const cors = require('cors');
const superadminRoutes = require('./routes/superadminRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests

// CORS configuration
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// Use the routes with updated paths
app.use('/api', superadminRoutes);
app.use('/api/doctors', doctorRoutes); // All doctor CRUD operations will go under /api/doctors

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
