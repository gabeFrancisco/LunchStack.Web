import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import authService from "./authService";

const urls = {
  dev: "http://localhost:5187/api",
};

const api = axios.create({
  baseURL: urls.dev,
  timeout: 5000,
});

api.defaults.withCredentials = true;
api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    // config.headers["Authorization"] = `Bearer ${authService.getToken()}`;

    return config;
  } catch (error) {
    console.log(error);
    return config;
  }
});

api.interceptors.response.use(
  undefined,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      await api.post(`auth/refresh`).then((res) => {
        if (res.status === 200) {
          // api.defaults.headers["Authorization"] = `Bearer ${res.data.token}`;
          // authService.saveToken(res.data.token);
        }
      })
      .catch(() => {
        authService.logout();
        location.href = "/login"
      })
      return api(originalRequest);
    }
    return Promise.reject(error)
  }
);

const config: AxiosRequestConfig = {};
api(config);
export default api;
