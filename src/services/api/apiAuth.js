import { api } from './apiConfig';

export const loginAdmin = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed! ' + error.message);
  }
};

