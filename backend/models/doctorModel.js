// models/doctorModel.js
const pool = require('../db');

const insertDoctor = async (doctor_name, contact_number, email) => {
  const query = `
    INSERT INTO doctors (doctor_name, contact_number, email)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [doctor_name, contact_number, email];

  const result = await pool.query(query, values);
  return result.rows[0];
};

const getDoctors = async () => {
  const query = 'SELECT id, doctor_name AS name, contact_number, email FROM doctors';
  const result = await pool.query(query);
  return result.rows;
};

module.exports = { insertDoctor, getDoctors };
