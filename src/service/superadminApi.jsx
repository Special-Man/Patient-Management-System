// services/superadminApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/superadmin';

export const getSuperadminCredentials = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
