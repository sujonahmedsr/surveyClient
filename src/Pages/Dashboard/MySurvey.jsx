import { Link } from "react-router-dom";
import useAuth from "../../AuthProvider/useAuth";
import useSurvey from "../../Hooks/useSurvey";

const MySurvey = () => {
    const { user } = useAuth()
    const [survey] = useSurvey()
    const mySurvey = survey.filter(item => item?.email == user?.email)
    return (
        <div className="space-y-5">

            {
                mySurvey.length > 0 ?
                    <>
                        <div className="text-center space-y-4">
                            <p>--Survey--</p>
                            <h1 className="text-3xl">My All Created Survey</h1>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table rounded-lg">
                                {/* head */}
                                <thead className="text-lg bg-blue-900 text-white">
                                    <tr className="text-center">
                                        <th>No.</th>
                                        <th>Email</th>
                                        <th>title</th>
                                        <th>votes</th>
                                        <th>date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        mySurvey.map((item, index) => <tr className="text-center" key={item._id}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                {item.email}
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold text-lg">{item.title}</div>
                                                </div>
                                            </td>
                                            <td className="text-lg">{item.votes}</td>
                                            <th className="text-center">{item.created_at}</th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <div className="text-center space-y-5">
                        <h1 className="text-2xl font-bold">You have no creted survey. If you want to create a survey</h1>
                        <div>
                            <Link to={'/Dashboard/Surveyor'} className="px-6 py-3 font-semibold bg-blue-800 hover:bg-blue-700 duration-300 text-white mr-5">Add Survey</Link>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MySurvey;