// models/doctorModel.js
const { password } = require('pg/lib/defaults');
const pool = require('../db');

const insertDoctor = async (doctor_name, contact_number, email, password) => {
  const query = `
    INSERT INTO doctors (doctor_name, contact_number, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [doctor_name, contact_number, email, password];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getDoctors = async () => {
  const query = 'SELECT id, doctor_name AS name, contact_number, email, password FROM doctors';
  const result = await pool.query(query);
  return result.rows;
};

const updateDoctor = async (id, doctor_name, contact_number, email, password) => {
  const query = `
    UPDATE doctors
    SET doctor_name = $1, contact_number = $2, email = $3, password = $4
    WHERE id = $5
    RETURNING *;
  `;
  const values = [doctor_name, contact_number, email, password, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Delete function to remove a doctor by ID
const deleteDoctor = async (id) => {
  const query = 'DELETE FROM doctors WHERE id = $1 RETURNING *';
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { insertDoctor, getDoctors, updateDoctor, deleteDoctor };
