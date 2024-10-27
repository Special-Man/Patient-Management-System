// server.js
const express = require('express');
const superadminRoutes = require('./routes/superadminRoutes');
require('dotenv').config();
const cors = require('cors');  // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Use this to allow all origins or configure as needed
// Use the superadmin route
app.use('/api', superadminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
