const pool = require('../db');

// Fetch all medication schedules with medicine details
const getAllMedications = async () => {
  const query = `
    SELECT 
      ms.id,
      m.name,
      m.manufacturer,
      m.price,
      ms.time1,
      ms.time2,
      ms.time3
    FROM 
      medication ms
    JOIN 
      medicine m ON ms.m_id = m.id;
  `;
  const result = await pool.query(query);
  return result.rows;
};
const getMedicationsByPatientId = async (patientId) => {
    const query = `
      SELECT
        m.name AS medicine_name,
        m.manufacturer,
        m.price,
        md.time1,
        md.time2,
        md.time3,
        md.id
      FROM
        medication md
      INNER JOIN
        medicine m ON md.m_id = m.id
      WHERE
        md.p_id = $1;
    `;
  
    const result = await pool.query(query, [patientId]);
    return result.rows;
  };
  
// Fetch a single medication schedule by ID
const getMedicationById = async (id) => {
  const query = `
    SELECT 
      ms.id,
      m.name,
      m.manufacturer,
      m.price,
      ms.time1,
      ms.time2,
      ms.time3
    FROM 
      medication ms
    JOIN 
      medicine m ON ms.m_id = m.id
    WHERE 
      ms.id = $1;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};
const createMedication = async (medication) => {
    const { m_id, time1, time2, time3, d_id, p_id } = medication;
  
    // Validate required fields
    if (!m_id || !d_id || !p_id) {
      throw new Error("Missing required fields: m_id, d_id, or p_id");
    }
  
    const query = `
      INSERT INTO medication (m_id, time1, time2, time3, d_id, p_id)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `;
  
    const values = [m_id, time1, time2, time3, d_id, p_id];
    const result = await pool.query(query, values);
  
    return result.rows[0];
  };
// Update a medication schedule
const updateMedication = async (id, medication) => {
  const { m_id, time1, time2, time3 } = medication;
  const query = `
    UPDATE medication
    SET 
      m_id = COALESCE($1, m_id),
      time1 = COALESCE($2, time1),
      time2 = COALESCE($3, time2),
      time3 = COALESCE($4, time3)
    WHERE id = $5
    RETURNING *;
  `;
  const values = [m_id, time1, time2, time3, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};
// Delete a medication schedule
const deleteMedication = async (id) => {
  const query = `
    DELETE FROM medication
    WHERE id = $1
    RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  getAllMedications,
  getMedicationById,
  createMedication,
  updateMedication,
  deleteMedication,
  getMedicationsByPatientId,
};
