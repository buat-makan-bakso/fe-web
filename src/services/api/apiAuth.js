import { api } from './apiConfig';

export const loginAdmin = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    console.log('Full response:', response);
    console.log('Data:', response.data); 
    console.log('Token:', response.data?.data.token); 
    console.log('Login success!');
    return response.data;
  } catch (error) {
    throw new Error('Login failed! ' + error.message);
  }
};

