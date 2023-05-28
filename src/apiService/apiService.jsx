import axios from 'axios';

axios.defaults.baseURL = 'https://shopping-carg-api.onrender.com';

export const getAllShops = async () => {
  try {
    const data = axios.get('/api/restaurant');

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addOrder = async order => {
  try {
    const data = axios.post('/api/order', order);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
