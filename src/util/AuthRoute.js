import axios from "axios";

const authRoute = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};

export default authRoute;
