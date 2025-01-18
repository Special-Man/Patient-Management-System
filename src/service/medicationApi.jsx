import axios from "axios";

const BASE_URL = "http://localhost:5000/api/medication"; // Adjust according to your API base URL

// Fetch all medications
export const fetchMedications = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Add a new medication
export const addMedication = async (data) => {
    try {
      console.log("Submitting Medication Data to API:", data); // Log the data being submitted
      const response = await axios.post(BASE_URL, data, {
        headers: {
          'Content-Type': 'application/json', // Ensure JSON content-type
        },
      });
      console.log("API Response:", response.data); // Log the API response
      return response.data;
    } catch (error) {
      console.error("Error adding medication:", error);
      throw error;
    }
  };


export const fetchMedicationsByPatientId = async (patientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/patient/${patientId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching medications:", error);
      throw error;
    }
  };

//   export const addMedication = async (data) => {
//     try {
//       const formData = new URLSearchParams();
//       formData.append("m_id", data.m_id);
//       formData.append("time1", data.time1);
//       formData.append("time2", data.time2);
//       formData.append("time3", data.time3);
//       formData.append("d_id", data.d_id);
//       formData.append("p_id", data.p_id);
  
//       const response = await axios.post(BASE_URL, formData, {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error adding medication:", error);
//       throw error;
//     }
//   };
  
  
