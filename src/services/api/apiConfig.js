import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const BASE_URL_WEB = `${BASE_URL}/web`;

const api = axios.create({
  baseURL: BASE_URL_WEB,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api, BASE_URL, BASE_URL_WEB };
