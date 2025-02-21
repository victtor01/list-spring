import axios from "axios";

const BASE_URL_BACKEND = "http://localhost:8080"

const api = axios.create({
  baseURL: BASE_URL_BACKEND,
  withCredentials: true
})

export { api };
