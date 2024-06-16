/*import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://deployment-teste-1.onrender.com',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
*/
// axiosConfig.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://seu-backend.com/api', // Substitua pela URL do seu backend
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
