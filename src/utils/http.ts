import axios from 'axios'

import { ApiKeys } from '../types/ApiKeys'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

http.interceptors.request.use((config) => {
  const apiKeysStr = localStorage.getItem('apiKeys') as string
  const apiKeys = JSON.parse(apiKeysStr) as ApiKeys
  const clockifyApiKey = apiKeys.clockify
  config.headers['X-Api-Key'] = clockifyApiKey
  return config
})

export default http
