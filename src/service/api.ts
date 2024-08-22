import axios, { InternalAxiosRequestConfig} from 'axios'

const urls = {
  dev: "http://localhost:5003"
}

const api = axios.create({
  baseURL: urls.dev,
  timeout: 5000
})

export default api;