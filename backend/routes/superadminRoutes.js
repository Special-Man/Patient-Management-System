// routes/superadminRoutes.js
const express = require('express');
const { fetchSuperadminCredentials } = require('../controllers/superadminController');

const router = express.Router();

router.get('/superadmin', fetchSuperadminCredentials);

module.exports = router;
