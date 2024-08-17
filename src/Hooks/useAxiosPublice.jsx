import axios from 'axios';

const axiosPublice = axios.create({
  baseURL: 'https://job-task-server-two-eosin.vercel.app',
});
const useAxiosPublice = () => {
  return axiosPublice;
};

export default useAxiosPublice;
