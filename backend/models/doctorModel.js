const pool = require('../db');
const bcrypt = require('bcrypt');

// Create a new doctor
const createDoctor = async (doctor) => {
  const { first_name, last_name, address, email, phone_number, age, specialty, password, picture_url } = doctor;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `
    INSERT INTO doctor (first_name, last_name, address, email, phone_number, age, specialty, password, picture_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
  `;
  const values = [first_name, last_name, address, email, phone_number, age, specialty, hashedPassword, picture_url];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get all doctors
const getAllDoctors = async () => {
  const query = 'SELECT id, first_name, last_name, address, email, phone_number, age, specialty, picture_url, password FROM doctor;';
  const result = await pool.query(query);
  return result.rows;
};

// Get a doctor by ID
const getDoctorById = async (id) => {
  const query = `
    SELECT id, first_name, last_name, address, email, phone_number, age, specialty, picture_url
    FROM doctor
    WHERE id = $1;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Update a doctor
const updateDoctor = async (id, doctor) => {
  const { first_name, last_name, address, email, phone_number, age, specialty, password, picture_url } = doctor;
  const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
  const query = `
    UPDATE doctor
    SET 
      first_name = COALESCE($1, first_name),
      last_name = COALESCE($2, last_name),
      address = COALESCE($3, address),
      email = COALESCE($4, email),
      phone_number = COALESCE($5, phone_number),
      age = COALESCE($6, age),
      specialty = COALESCE($7, specialty),
      password = COALESCE($8, password),
      picture_url = COALESCE($9, picture_url)
    WHERE id = $10
    RETURNING *;
  `;
  const values = [first_name, last_name, address, email, phone_number, age, specialty, hashedPassword, picture_url, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Delete a doctor
const deleteDoctor = async (id) => {
  const query = 'DELETE FROM doctor WHERE id = $1 RETURNING *;';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const getDoctorByEmail = async (email) => {
  const query = 'SELECT id, email, password FROM doctor WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};
module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  getDoctorByEmail,
};
