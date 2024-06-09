import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllPayments = () => {
    const axiosSecure = useAxiosSecure()
    const { data: payments = [], isPending } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments')
            return res.data
        }
    })

    if (isPending) return <p>Loading...</p>

    
    return (
        <div>
            <div className="text-center space-y-4">
                <p>--Payments--</p>
                <h1 className="text-3xl">Member All Payments</h1>
            </div>
            <div className="space-y-5">
                <h1 className="text-2xl font-semibold">Total Users: {payments.length}</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table rounded-lg">
                            {/* head */}
                            <thead className="text-lg bg-blue-900 text-white">
                                <tr className="text-center">
                                    <th>No.</th>
                                    <th>Email</th>
                                    <th>transactionId</th>
                                    <th>Price</th>
                                    <th>date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((item, index) => <tr className="text-center" key={item._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold text-lg">{item.transactionId}</div>
                                            </div>
                                        </td>
                                        <td className="text-lg">${item.price}</td>
                                        <th className="text-center">{new Date(item.date).toLocaleDateString()}</th>
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

export default AllPayments;