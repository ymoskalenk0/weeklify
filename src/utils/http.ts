import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
})

export default http
