import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const carAPI = {
  getAll: () => api.get('/cars/'),
  getById: (id) => api.get(`/cars/${id}/`),
  getByCategory: (category) => api.get(`/cars/by_category/?category=${category}`),
};

export const inquiryAPI = {
  create: (data) => api.post('/inquiry/', data),
};

export const testDriveAPI = {
  create: (data) => api.post('/test-drive/', data),
};

export default api;
