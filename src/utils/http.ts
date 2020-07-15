import axios from 'axios'

import getApiKeys from './apiKeys'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

http.interceptors.request.use((config) => {
  const apiKeys = getApiKeys()
  config.headers['X-Api-Key'] = apiKeys?.clockify
  return config
})

export default http
