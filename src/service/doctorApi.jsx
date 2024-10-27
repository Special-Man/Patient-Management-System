import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/doctors';

export const addDoctor = (doctorData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/add`, doctorData)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
