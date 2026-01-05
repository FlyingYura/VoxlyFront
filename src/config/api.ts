import axios from 'axios';

// Базовий URL API (за замовчуванням для локальної розробки)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Створюємо екземпляр axios з базовою конфігурацією
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor для додавання токену авторизації
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('firebaseIdToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor для обробки помилок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Токен недійсний, видаляємо його
      localStorage.removeItem('firebaseIdToken');
      localStorage.removeItem('currentUser');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

