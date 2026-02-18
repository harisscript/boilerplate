import axios from 'axios';
import { AppConfig } from '../constants';
import { getErrorMessage } from '../utils/error/errorHandler';

const api = axios.create({
  baseURL: AppConfig.apiUrl,
  timeout: AppConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Dynamic request interceptor (e.g., for token)
api.interceptors.request.use(
  async config => {
    // Example: add token if available
    // const token = await getTokenSomehow();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

// Dynamic response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    // You can log error, show toast, or transform error here
    error.message = getErrorMessage(error);
    return Promise.reject(error);
  }
);

export default api;
