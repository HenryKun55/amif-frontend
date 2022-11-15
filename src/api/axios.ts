import axios from 'axios'

import { TOKEN_KEY } from '.'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
  },
})

api.interceptors.request.use(function (config) {
  if (config.headers) {
    const token = localStorage.getItem(TOKEN_KEY)
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
