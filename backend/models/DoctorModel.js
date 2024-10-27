import pool from '../config/db.js';

class DoctorModel {
  static async addDoctor(name, contactNumber, email) {
    const query = 'INSERT INTO doctors (name, contact_number, email) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, contactNumber, email];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

export default DoctorModel;
