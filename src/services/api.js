import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_BACK,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
