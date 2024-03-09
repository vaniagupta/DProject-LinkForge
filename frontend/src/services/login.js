const baseUrl = 'https://linkforge-backend.onrender.com/api/login';

const login = async (credentials, axiosPrivate) => {
  const response = await axiosPrivate.post(baseUrl, credentials);
  return response.data;
};

export default { login };
