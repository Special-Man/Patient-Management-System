// models/medsModel.js
const pool = require('../db');

const insertMedicine = async (name, manufacturer, dosage, price, expiration_date) => {
  const query = `
    INSERT INTO meds (name, manufacturer, dosage, price, expiration_date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [name, manufacturer, dosage, price, expiration_date];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getMedicines = async () => {
  const query = `
    SELECT id, name AS name, manufacturer, dosage, price, expiration_date 
    FROM meds;
  `;
  const result = await pool.query(query);
  return result.rows;
};

const updateMedicine = async (id, name, manufacturer, dosage, price, expiration_date) => {
  const query = `
    UPDATE meds
    SET name = $1, manufacturer = $2, dosage = $3, price = $4, expiration_date = $5
    WHERE id = $6
    RETURNING *;
  `;
  const values = [name, manufacturer, dosage, price, expiration_date, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteMedicine = async (id) => {
  const query = 'DELETE FROM meds WHERE id = $1 RETURNING *;';
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = { insertMedicine, getMedicines, updateMedicine, deleteMedicine };
