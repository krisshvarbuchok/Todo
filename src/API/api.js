import axios from 'axios';

//console.log('Base URL from .env:', import.meta.env.VITE_API_BASE_URL);

const api = axios.create({
    baseURL:  import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
  });

  api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });
  
  api.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401 ) {
      // Например, редирект на страницу логина
      window.location = '/login';
    }
    return Promise.reject(error);
  });
  
  export default api;