import { Link, NavLink } from "react-router-dom";
import useSurvey from "../Hooks/useSurvey";
import { FadeLoader } from "react-spinners";
import { useEffect, useState } from "react";

const AllSurvey = () => {
    const [survey, isPending] = useSurvey()
    const [surveySort, setSurveySort] = useState([])
    useEffect(() => {
        setSurveySort(survey)
    }, [survey])

    const category = [
        "Market Research",
        "Social Media",
        "Customer Satisfaction",
        "Employee Engagement",
        "Product Feedback",
        "Usability",
        "Healthcare",
        "Education",
        "Event Feedback",
    ]

    const handleSort = () => {
        const result = [...surveySort].sort((a, b) => b.votes - a.votes)
        setSurveySort(result)
    }

    const hanldeCategory = btn => {
        const result = survey.filter(item => item.category === btn)
        setSurveySort(result)
    }
    const hanldeAll = () => {
        setSurveySort(survey)
    }
    const handleDate = () => {
        const result = [...survey].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setSurveySort(result)
    }
    return (
        <div className="py-32 px-4 container mx-auto">
            {
                isPending && <div className="absolute top-1/2 left-1/2">
                    <FadeLoader color="#36d7b7" width={15} />
                </div>
            }
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
                <button className="bg-blue-200 px-2 py-1 shadow-xl hover:bg-blue-300" onClick={hanldeAll}>
                    All
                </button>
                {
                    category.map((btn, id) => <NavLink key={id}>
                        <button className="bg-blue-200 px-2 py-1 shadow-xl hover:bg-blue-300" onClick={() => hanldeCategory(btn)}>
                            {btn}
                        </button>
                    </NavLink>)
                }
                <div className="float-right space-x-4">
                    <button className="bg-blue-800 text-white px-2 py-1 shadow-xl hover:bg-blue-700" onClick={handleSort}>Sort By Votes</button>
                    <button className="bg-blue-800 text-white px-2 py-1 shadow-xl hover:bg-blue-700" onClick={handleDate}>Sort By Dates</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 container mx-auto">
                {
                    surveySort.map(item =>
                        <Link to={`/sureveyDetails/${item._id}`} key={item._id} className="max-w-sm mx-auto relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300">
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