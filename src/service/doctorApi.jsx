// services/doctorApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/doctors';

// Add a new doctor (POST)
export const addDoctor = (doctorData) => {
  return axios.post(BASE_URL, doctorData)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Fetch all doctors (GET)
export const getDoctors = () => {
  return axios.get(BASE_URL)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Update doctor details (PUT)
export const editDoctor = (id, doctorData) => {
  return axios.put(`${BASE_URL}/${id}`, doctorData)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Delete doctor (DELETE)
export const deleteDoctor = (id) => {
  return axios.delete(`${BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

// Fetch a doctor by ID (GET)
export const getDoctorById = (id) => {
  return axios.get(`${BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};


// Doctor login (POST)
export const loginDoctor = (email, password) => {
  return axios.post(`${BASE_URL}/login`, { email, password })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.response.data));
};