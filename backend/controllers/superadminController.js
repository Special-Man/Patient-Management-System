// controllers/superadminController.js
const { getSuperadminCredentials } = require('../models/superadminModel');

const fetchSuperadminCredentials = async (req, res) => {
  try {
    const credentials = await getSuperadminCredentials();
    res.status(200).json(credentials);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while fetching credentials' });
  }
};

module.exports = { fetchSuperadminCredentials };
