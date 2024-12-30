// service/medsApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/meds';

// Add a new medicine (POST)
export const addMedicine = (medicineData) => {
  return axios.post(BASE_URL, medicineData)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Fetch all medicines (GET)
export const getMedicines = () => {
  return axios.get(BASE_URL)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Update medicine details (PUT)
export const editMedicine = (id, medicineData) => {
  return axios.put(`${BASE_URL}/${id}`, medicineData)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Delete medicine (DELETE)
export const deleteMedicine = (id) => {
  return axios.delete(`${BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};
