import { Link } from "react-router-dom";
import useAuth from "../../AuthProvider/useAuth";
import useSurvey from "../../Hooks/useSurvey";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MySurvey = () => {
    const { user } = useAuth()
    const [survey, isPending, refetch] = useSurvey()
    const axiosPublic = useAxiosPublic()
    const mySurvey = survey.filter(item => item?.email == user?.email)
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/survey/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div className="space-y-5">
            {
                isPending && <p>Loading...</p>
            }
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
                                        <th>Action</th>
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
                                            <td className="space-x-5 flex items-center text-2xl">
                                                <Link to={`/Dashboard/UpdateSurvey/${item._id}`}><FaEdit /></Link>
                                                <Link onClick={()=>handleDeleteItem(item)}><MdDelete /></Link>
                                            </td>
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