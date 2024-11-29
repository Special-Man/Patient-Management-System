// models/patientModel.js
const pool = require('../db');

const insertPatient = async (patient_name, contact_number, email, password) => {
  const query = `
    INSERT INTO patient (patient_name, contact_number, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [patient_name, contact_number, email, password];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getPatients = async () => {
  const query = 'SELECT id, patient_name AS name, contact_number, email, password FROM patient';
  const result = await pool.query(query);
  return result.rows;
};

const updatePatient = async (id, patient_name, contact_number, email, password) => {
  const query = `
    UPDATE patient
    SET patient_name = $1, contact_number = $2, email = $3, password = $4
    WHERE id = $5
    RETURNING *;
  `;
  const values = [patient_name, contact_number, email, password, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Delete function to remove a patient by ID
const deletePatient = async (id) => {
  const query = 'DELETE FROM patient WHERE id = $1 RETURNING *';
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { insertPatient, getPatients, updatePatient, deletePatient };
