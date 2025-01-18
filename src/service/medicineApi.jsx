import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/medicines';

// Fetch all medicines (GET)
export const fetchMedicines = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Add a new medicine (POST)
export const addMedicine = async (medicineData) => {
  const response = await axios.post(BASE_URL, medicineData);
  return response.data;
};

// Delete (soft delete) a medicine (DELETE)
export const deleteMedicine = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
