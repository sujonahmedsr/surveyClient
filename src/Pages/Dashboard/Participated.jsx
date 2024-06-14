import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";

const Participated = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isPending } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    if (isPending) return <p>Loading...</p>
    return (
        <div>
            <div>
                <div className="text-center space-y-4">
                    <p>--All Participated--</p>
                    <h1 className="text-3xl">All Participated</h1>
                </div>
                <div className="space-y-5">
                    <h1 className="text-2xl font-semibold">Total Participated: {users.length}</h1>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table rounded-lg">
                                {/* head */}
                                <thead className="text-lg bg-blue-900 text-white">
                                    <tr>
                                        <th>No.</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((item, index) => <tr key={item._id}>
                                            <td>
                                                {index + 1}
                                            </td>

                                            <td>
                                                <div>
                                                    <div className="font-bold text-lg">{item.name}</div>
                                                </div>
                                            </td>
                                            <td className="text-lg">{item.email}</td>
                                            <td className="text-lg font-semibold">
                                                {
                                                    item?.role ? <p>{item.role}</p> : 
                                                    <FaUsers
                                                     className="text-3xl" />
                                                }
                                                
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Participated;