import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../AuthProvider/useAuth";
import noUser from '../../assets/images/noUser.png'

const Comments = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data : comments = [] } = useQuery({
        queryKey: ['AllComments'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/comments')
            return res.data
        }
    })
    const myComments = comments.filter(comment => comment.email === user?.email)
    return (
        <div>
            <div className="text-center">
                <h1>--Comments({myComments.length})--</h1>
                <h1 className="text-3xl font-semibold">My All Comments</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                    {
                        myComments.map((comment, id) => <div className="p-5 border hover:border-blue-800 duration-300 rounded-lg space-y-5" key={id}>
                            <div className="flex items-center justify-between gap-6 ">
                                <div className="flex items-center gap-3"> 
                                    <img className="w-12 h-12 rounded-full" src={noUser} alt="" />
                                    <div>
                                        <h1 className="text-lg font-semibold">{comment.name}</h1>
                                        <h1>{comment.email}</h1>
                                    </div>
                                </div>
                                <h1>{new Date(comment.date).toLocaleDateString()}</h1>
                            </div>
                            <h1 className="text-2xl font-bold">{comment.title}</h1>
                            <p>{comment.comment}</p>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default Comments;