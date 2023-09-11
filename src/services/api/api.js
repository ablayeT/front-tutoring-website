import axios from 'axios';

const api = axios.create();

api.defaults.baseURL =
  process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_URL;

api.interceptors.request.use(
  (config) => {
    console.log(api.interceptors.request);
    const token = localStorage.getItem('token');

    console.log(token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
