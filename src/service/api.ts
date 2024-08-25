import axios, { InternalAxiosRequestConfig} from 'axios'
import authService from './authService'

const urls = {
  dev: "http://localhost:5003"
}

const api = axios.create({
  baseURL: urls.dev,
  timeout: 5000
})

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try{
    const token = authService.getToken()
    if(token){
      config.headers["Authorization"] = `Bearer ${token}`
    }

    return config
  }
  catch (error){
    return config;
  }
})

export default api;