import axios from 'axios';

const API = __API_URL__+'/api';

export const loginUser = async (email, password) => {
  console.log("AuthService: Logging in user", API);
  const response = await axios.post(`${API}/login`, { email, password });
  return response.data;
};
export const registerUser = async (userData) => {
  const response = await axios.post(`${API}/register`, userData);
  return response.data;
};