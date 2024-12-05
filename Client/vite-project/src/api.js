import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api/v1' });

// Attach token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const fetchTasks = () => API.get('/tasks/getAllTask');
export const createTask = (data) => API.post('/createTask', data);
export const updateTask = (id, data) => API.put(`/tasks/updateTask/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/DeleteTask/${id}`);
export const fetchTaskDetails = (id) => API.get(`/tasks/getTaskById/${id}`);
