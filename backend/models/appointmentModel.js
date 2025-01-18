const pool = require('../db');

// Fetch all appointments with doctor and patient details
const getAllAppointments = async () => {
  const query = `
    SELECT 
      a.id,
      p.first_name AS patient_first_name,
      d.first_name AS doctor_first_name,
      a.visit_type,
      a.date,
      a.time_from,
      a.time_to,
      a.illness
    FROM 
      appointments a
    INNER JOIN 
      patient p ON a.p_id = p.id
    INNER JOIN 
      doctor d ON a.d_id = d.id;
  `;
  const result = await pool.query(query);
  return result.rows;
};

// Fetch appointments by patient ID
const getAppointmentsByPatientId = async (patientId) => {
  const query = `
    SELECT 
      a.id,
      d.first_name AS doctor_first_name,
      a.visit_type,
      a.date,
      a.time_from,
      a.time_to,
      a.illness
    FROM 
      appointments a
    INNER JOIN 
      doctor d ON a.d_id = d.id
    WHERE 
      a.p_id = $1;
  `;
  const result = await pool.query(query, [patientId]);
  return result.rows;
};

// Fetch appointments by doctor ID
const getAppointmentsByDoctorId = async (doctorId) => {
  const query = `
    SELECT 
      a.id,
      p.first_name AS patient_first_name,
      a.visit_type,
      a.date,
      a.time_from,
      a.time_to,
      a.illness
    FROM 
      appointments a
    INNER JOIN 
      patient p ON a.p_id = p.id
    WHERE 
      a.d_id = $1;
  `;
  const result = await pool.query(query, [doctorId]);
  return result.rows;
};

// Create a new appointment
const createAppointment = async (appointment) => {
  const { p_id, d_id, visitType, email, date, phone, timeFrom, timeTo, illness, age } = appointment;

  const query = `
    INSERT INTO appointments (p_id, d_id, visit_type, email, date, phone, time_from, time_to, illness, age)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;
  const values = [p_id, d_id, visitType, email, date, phone, timeFrom, timeTo, illness, age];
  const result = await pool.query(query, values);
  return result.rows[0];
};


// Delete an appointment by ID
const deleteAppointmentById = async (id) => {
  const query = `
    DELETE FROM appointments
    WHERE id = $1
    RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  getAllAppointments,
  getAppointmentsByPatientId,
  getAppointmentsByDoctorId,
  createAppointment,
  deleteAppointmentById,
};
