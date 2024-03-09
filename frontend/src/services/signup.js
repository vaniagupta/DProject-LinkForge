import axios from 'axios';

const baseUrl = 'https://linkforge-backend.onrender.com/api/signup';

const signup = async (info) => {
  const response = await axios.post(baseUrl, info);
  return response.data;
};

export default { signup };
