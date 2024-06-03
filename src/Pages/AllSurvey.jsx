import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllSurvey = () => {
    const axiosPublic = useAxiosPublic()
    const { data: allSurvey = [], isLoading, refetch } = useQuery({
        queryKey: ['allSurveys'],
        queryFn: async () => {
            const res = await axiosPublic.get('/survey')
            return res.data
        }
    })

    console.log(allSurvey);
    const [sureveys, setSurveys] = useState(allSurvey)
    console.log(sureveys);
    const categorys = [
        'Customer Satisfaction',
        'Employee Engagement',
        'Market Research',
        'Product Feedback',
        'Usability',
        'Event Feedback',
        'Social Media',
        "Healthcare",
        "Education"
    ]

    // const handleCategory = category =>{
    //     if(isLoading) return <p>loaging..</p>
    //     const result = allSurvey.filter(survey => console.log(survey.category == category))
    //     setSurveys(result)
    // }

    return (
        <div className="py-32 px-4 container mx-auto">
            <div className="flex flex-wrap gap-4 items-center py-5">
                {
                    isLoading && <p>loading...</p>
                }
            <button   className="px-3 py-1 md:px-4 md:py-2 border border-blue-600">All</button>
                {
                    categorys.map( (btn, id) => <button className="px-3 py-1 md:px-4 md:py-2 border border-blue-600 font-semibold rounded flex" key={id}>{btn}</button>
                )
                }
            </div>
            <div className="float-right py-5">
                <select>
                    <option>Sort By</option>
                    <option value="Date">Date</option>
                    <option value="Vote">Vote</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 container mx-auto">
                {
                    allSurvey.map(item =>
                        <Link key={item._id} className="max-w-sm mx-auto relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300">

                            <img className="rounded-t-lg" src={item.image} alt="" />
                            <div className="absolute top-0 left-0 bg-blue-800 px-3 py-2 text-white font-semibold">
                                <p>Votes: {item.votes}</p>
                            </div>

                            <div className="p-5">
                                <p className="py-2 px-2 inline-block text-blue-800 bg-blue-100 ">{`Published Date : ${item.created_at}`}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                <div className="float-right my-2">
                                    <p className="py-2 px-2 inline-block text-blue-800 bg-blue-100 ">{`Category : ${item.category}`}</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default AllSurvey;