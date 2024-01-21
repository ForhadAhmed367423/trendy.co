import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://assignment12-category-0010-server.vercel.app",
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;