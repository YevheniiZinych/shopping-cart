import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

export const getAllShops = async () => {
  try {
    const data = axios.get('/api/restaurant');

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
