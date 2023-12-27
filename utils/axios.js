import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/difun9bbc/auto",
});
export default axiosInstance;
