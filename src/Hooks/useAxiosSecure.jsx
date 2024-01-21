import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: "https://assignment12-category-0010-server.vercel.app",
})
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    // console.log('interceptors hit')
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // interceptors for 401 and 403

  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    // console.log('error in the interceptors', status )
    if (status === 401 || status === 403) {
      await logOut();
      navigate('/login')
    }
    return Promise.reject(error)
  })

  return axiosSecure;
};

export default useAxiosSecure;