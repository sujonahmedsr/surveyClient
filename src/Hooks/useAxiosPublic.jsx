import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://survey-crud.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;