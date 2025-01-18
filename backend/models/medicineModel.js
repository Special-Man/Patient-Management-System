const pool = require('../db');

// Get all medicines (only those not marked as deleted)
const getAllMedicines = async () => {
  const query = 'SELECT * FROM medicine WHERE deleted = FALSE';
  const result = await pool.query(query);
  return result.rows;
};

// Get a single medicine by ID
const getMedicineById = async (id) => {
  const query = 'SELECT * FROM medicine WHERE id = $1 AND deleted = FALSE';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Add a new medicine
const addMedicine = async (name, manufacturer, price) => {
  const query = 'INSERT INTO medicine (name, manufacturer, price) VALUES ($1, $2, $3) RETURNING *';
  const result = await pool.query(query, [name, manufacturer, price]);
  return result.rows[0];
};

// Update a medicine
const updateMedicine = async (id, name, manufacturer, price) => {
  const query = `
    UPDATE medicine 
    SET name = $1, manufacturer = $2, price = $3 
    WHERE id = $4 AND deleted = FALSE
    RETURNING *`;
  const result = await pool.query(query, [name, manufacturer, price, id]);
  return result.rows[0];
};

// Soft delete a medicine (mark as deleted)
const softDeleteMedicine = async (id) => {
  const query = `
    UPDATE medicine 
    SET deleted = TRUE 
    WHERE id = $1
    RETURNING *`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  getAllMedicines,
  getMedicineById,
  addMedicine,
  updateMedicine,
  softDeleteMedicine,
};
