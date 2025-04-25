import axios from 'axios';

// Create an Axios instance with default configs
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.alfaskills-academy.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response.data; // Return just the data part of the response
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle token refresh if we get a 401 response
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
            { refreshToken }
          );
          
          const { token } = response.data;
          localStorage.setItem('authToken', token);
          
          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails, redirect to login
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

// API functions for different resources
const apiService = {
  // Auth endpoints
  auth: {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    logout: () => api.post('/auth/logout'),
    refreshToken: (refreshToken) => api.post('/auth/refresh', { refreshToken }),
  },
  
  // User endpoints
  user: {
    getProfile: () => api.get('/user/profile'),
    updateProfile: (data) => api.put('/user/profile', data),
  },
  
  // Courses endpoints
  courses: {
    getAll: (params) => api.get('/courses', { params }),
    getById: (id) => api.get(`/courses/${id}`),
    getRecommended: () => api.get('/courses/recommended'),
    getInProgress: () => api.get('/courses/in-progress'),
    getCourseProgress: (courseId) => api.get(`/courses/${courseId}/progress`),
    updateProgress: (courseId, data) => api.post(`/courses/${courseId}/progress`, data),
  },
  
  // Mentors endpoints
  mentors: {
    getAll: (params) => api.get('/mentors', { params }),
    getById: (id) => api.get(`/mentors/${id}`),
    getAvailability: (id) => api.get(`/mentors/${id}/availability`),
    scheduleSession: (id, data) => api.post(`/mentors/${id}/schedule`, data),
  },
  
  // Calendar endpoints
  calendar: {
    getEvents: (year, month) => api.get(`/calendar/events`, { params: { year, month } }),
    getEventById: (id) => api.get(`/calendar/events/${id}`),
  },
};

export default apiService;