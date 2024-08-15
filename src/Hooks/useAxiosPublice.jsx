import axios from 'axios';

const axiosPublice = axios.create({
  baseURL: '',
});
const useAxiosPublice = () => {
  return axiosPublice;
};

export default useAxiosPublice;
