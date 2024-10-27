// models/superadminModel.js
const pool = require('../db');

const getSuperadminCredentials = async () => {
  const query = 'SELECT username, password FROM superadmin';
  const result = await pool.query(query);
  return result.rows;
};



module.exports = { getSuperadminCredentials };
