const bcrypt = require('bcrypt');
const pool = require('../db');

// Get all patients (only those not marked as deleted)
const getAllPatients = async () => {
  const query = 'SELECT * FROM patient WHERE deleted = FALSE';
  const result = await pool.query(query);
  return result.rows;
};

// Get a single patient by ID
const getPatientById = async (id) => {
  const query = 'SELECT * FROM patient WHERE id = $1 AND deleted = FALSE';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Add a new patient
const addPatient = async (firstName, lastName, address, phoneNumber, email, age, password) => {
  try {
    // Check if the password exists and hash it
    if (!password) {
      throw new Error('Password is required');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash with salt rounds

    const query = `
      INSERT INTO patient (first_name, last_name, address, phone_number, email, age, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`;
    const result = await pool.query(query, [firstName, lastName, address, phoneNumber, email, age, hashedPassword]);

    return result.rows[0];
  } catch (error) {
    console.error('Error creating patient:', error.message);
    throw error;
  }
};

// Update a patient's information
const updatePatient = async (id, patientData) => {
  const { first_name, last_name, address, email, phone_number, age } = patientData;
  const query = `
    UPDATE patient
    SET first_name = $1, last_name = $2, address = $3, email = $4, phone_number = $5, age = $6
    WHERE id = $7 AND deleted = FALSE
    RETURNING *`;
  const result = await pool.query(query, [
    first_name,
    last_name,
    address,
    email,
    phone_number,
    age,
    id,
  ]);
  return result.rows[0];
};

// Soft delete a patient
const softDeletePatient = async (id) => {
  const query = `
    UPDATE patient
    SET deleted = TRUE
    WHERE id = $1
    RETURNING *`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Find a patient by email (used for login)
const findPatientByEmail = async (email) => {
  const query = 'SELECT * FROM patient WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

module.exports = {
  getAllPatients,
  getPatientById,
  addPatient,
  updatePatient,
  softDeletePatient,
  findPatientByEmail,
};
