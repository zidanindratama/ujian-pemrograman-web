import axios from "axios";

const DEV_API_URL = "http://localhost:3001";
const PROD_API_URL = "https://be-ujian-pemrograman-web.vercel.app";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? DEV_API_URL : PROD_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default axiosInstance;
