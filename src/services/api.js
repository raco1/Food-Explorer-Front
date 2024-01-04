import axios from "axios"

export const api = axios.create({
  baseURL: "https://food-explorer-api-a3j9.onrender.com",
  withCredentials: true
})