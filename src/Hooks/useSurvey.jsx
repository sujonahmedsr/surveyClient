import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSurvey = () => {
    const axiosPublic = useAxiosPublic()
    const {data: survey = [], isPending, refetch} = useQuery({
        queryKey: ['allSurveys'],
        queryFn: async () => {
            const res = await axiosPublic.get('/survey')
            return res.data
        }
    })
    return [survey, isPending, refetch]
};

export default useSurvey;