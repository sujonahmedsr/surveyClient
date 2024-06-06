import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isPending, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    if (isPending) return <p>Loading...</p>

    const handleAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Profile has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="text-center space-y-4">
                <p>--All Users--</p>
                <h1 className="text-3xl">Manage All Users</h1>
            </div>
            <div className="space-y-5">
                <h1 className="text-2xl font-semibold">Total Users: {users.length}</h1>
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
                                    <th>Action</th>
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
                                        <td className="text-lg">
                                            {
                                                item.role === 'admin' ? 'admin' :
                                                    <FaUsers
                                                    onClick={() => handleAdmin(item)}
                                                     className="text-3xl cursor-pointer" />
                                            }

                                        </td>
                                        <th className="text-center">
                                            <button 
                                            onClick={() => handleDelete(item._id)}
                                             className="text-2xl text-red-500 "><MdDelete /></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;