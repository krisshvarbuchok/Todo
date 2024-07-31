import axios from 'axios';

const api = axios.create({
    baseURL: 'https://todo-redev.herokuapp.com/api',
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
    if (error.response.status === 401) {
      // Например, редирект на страницу логина
      window.location = '/login';
    }
    return Promise.reject(error);
  });
  
  export default api;