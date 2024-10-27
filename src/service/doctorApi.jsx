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

// Other CRUD operations can go here
