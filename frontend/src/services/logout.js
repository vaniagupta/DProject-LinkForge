import axios from 'axios';

const baseUrl = 'https://linkforge-backend.onrender.com/api/logout';

const logout = async () => {
  const config = {
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await axios.post(baseUrl, config);
  return response.data;
};

export default { logout };
