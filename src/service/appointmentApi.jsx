import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Update with your backend API base URL

// Fetch all patients
export const fetchAllPatients = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/patients`);
    return response.data; // Assuming your API returns a list of patients
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
};

// Fetch all doctors
export const fetchAllDoctors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors`);
    return response.data; // Assuming your API returns a list of doctors
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

// Add a new appointment
export const addAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${BASE_URL}/appointment`, appointmentData);
    return response.data; // Assuming your API returns the created appointment
  } catch (error) {
    console.error("Error adding appointment:", error);
    throw error;
  }
};

// Fetch appointments by patient ID
export const fetchAppointmentsByPatientId = async (patientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/appointment/patient/${patientId}`);
      return response.data; // Assuming your API returns a list of appointments
    } catch (error) {
      console.error("Error fetching appointments by patient ID:", error);
      throw error;
    }
  };
  
