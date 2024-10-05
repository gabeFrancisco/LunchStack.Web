import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import authService from "./authService";

export const urls = {
  dev: "http://localhost:5187/api",
};

const api = axios.create({
  baseURL: urls.dev,
  timeout: 10000,
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
    if(error.code === AxiosError.ERR_NETWORK){
      alert("Houve um problema com a conexão aos nossos servidores! Contate o suporte ou tente mais tarde!")
    }
    if (error.response.status === 401) {
      await api.post(`auth/refresh`).then((res) => {
        if (res.status === 200) {
          return;
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
