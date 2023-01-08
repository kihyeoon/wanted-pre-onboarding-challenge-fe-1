import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // 서버 url
  timeout: 3000,
});

export default axiosInstance;

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token;

  return config;
});
