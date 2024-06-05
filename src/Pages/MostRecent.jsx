import { Link } from "react-router-dom";
import useSurvey from "../Hooks/useSurvey";

const MostRecent = () => {
    const [survey] = useSurvey()
    survey.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    return (
        <div>
            <div className="text-center pt-20">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-blue-800">-- Latest --</p>
                <h1 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-blue-800">Latest Surveys Section</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 container mx-auto">
                {
                    survey.slice(0, 6).map(item =>
                        <Link to={`/sureveyDetails/${item._id}`} key={item._id} className="max-w-sm mx-auto relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300">
                            <a href="#">
                                <img className="rounded-t-lg" src={item.image} alt="" />
                                <div className="absolute top-0 left-0 bg-blue-800 px-3 py-2 text-white font-semibold">
                                    <p>Votes: {item.votes}</p>
                                </div>
                            </a>
                            <div className="p-5">
                                <p className="py-2 px-2 inline-block text-blue-800 bg-blue-100 ">{`Published Date : ${item.created_at}`}</p>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default MostRecent;