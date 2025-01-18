// services/doctorApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/patients';

// Add a new doctor (POST)
export const addPatient = (patientData) => {
  return axios.post(BASE_URL, patientData)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Fetch all doctors (GET)
export const getPatients = () => {
  return axios.get(BASE_URL)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Update doctor details (PUT)
export const editPatient = (id, patientData) => {
  return axios.put(`${BASE_URL}/${id}`, patientData)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Delete doctor (DELETE)
export const deletePatient = (id) => {
  return axios.delete(`${BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};