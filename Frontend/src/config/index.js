import axios from "axios";

debugger;
let token = JSON.parse(localStorage.getItem("user"));
if (token) {
  token = JSON.parse(localStorage.getItem("user"))["token"];
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
export default axiosInstance;
