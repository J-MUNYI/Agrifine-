import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper: prefer token in localStorage (remembered) then sessionStorage
const getStoredToken = () => {
  const local = localStorage.getItem('token');
  if (local) return local;
  const session = sessionStorage.getItem('token');
  if (session) return session;
  return null;
};

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = getStoredToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      // Attempt to refresh access token using httpOnly cookie
      return axios.post('/api/auth/refresh', null, { withCredentials: true })
        .then((res) => {
          const newToken = res.data?.token;
          if (newToken) {
            try {
              // Save token where it was previously stored (prefer local then session)
              if (localStorage.getItem('token') !== null) {
                localStorage.setItem('token', newToken);
              } else if (sessionStorage.getItem('token') !== null) {
                sessionStorage.setItem('token', newToken);
              } else {
                // default to sessionStorage if none present
                sessionStorage.setItem('token', newToken);
              }
            } catch (e) {
              // ignore storage errors
            }

            // update header and retry original request
            originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
            return axios(originalRequest);
          }

          // if refresh didn't return a token, fall through to clearing
          throw new Error('Refresh failed');
        })
        .catch(() => {
          try {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
          } catch (e) { }
          window.location.href = '/login';
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export default api;

