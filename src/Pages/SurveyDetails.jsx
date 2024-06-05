import { Link, useLoaderData } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { SlLike } from "react-icons/sl";
import { TbArrowBackUp } from "react-icons/tb";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import useAuth from "../AuthProvider/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import noUser from '../assets/images/noUser.png'

const SurveyDetails = () => {
    let { _id, category, created_at, description, details, image, title, votes } = useLoaderData();
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [vote, setVote] = useState(votes)
    const [like, setLike] = useState(null)

    const handleVote = () => {
        axiosPublic.patch(`/survey/${_id}`, votes)
            .then(res => {
                setLike(res.data.matchedCount)
                setVote(vote + 1)
            })
    }

    const { data: comments = [], refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/comments')
            return res.data
        }
    })
    const forSurveyComment = comments.filter(item => item.title === title)
    const [box, setBox] = useState(false)
    const handleBox = () => {
        setBox(!box)
    }

    const handleCommnets = e => {
        e.preventDefault()
        const comment = e.target.comment.value
        console.log(comment);
        const userCoInfo = {
            name: user?.displayName,
            email: user?.email,
            title: title,
            comment: comment,
            date: new Date()
        }
        axiosPublic.post('/comments', userCoInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your comment has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setBox(false)
                    refetch()
                }
            })
    }

    return (
        <div className="py-28 container mx-auto px-4">
            <Link to={-1} className="text-base flex items-center gap-2 text-blue-800 hover:text-blue-700 font-semibold py-4"><TbArrowBackUp className="text-2xl"></TbArrowBackUp> Go Back</Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="flex gap-2 items-center"><CgCalendarDates className="text-xl" /> :<span className="font-semibold">{created_at}</span> </h1>
                        <h1 className="flex gap-2 items-center"><FaBookReader className="text-xl" /> : <span className="font-semibold text-blue-800">{details.duration}</span> </h1>
                    </div>
                    <h1 className="text-3xl font-bold text-end">{title}</h1>
                    <p><b className="text-blue-800">{description}</b> At Survesky, we value your opinions and insights. Our diverse range of surveys is designed to gather feedback that helps us improve our services, products, and overall experience. By participating, you contribute to a better future for everyone involved. Explore our surveys and make your voice heard today!</p>
                    <p>Share your experience with our products and services. Your feedback helps us understand what we’re doing well and where we can improve, ensuring we meet your expectations and enhance your satisfaction.</p>

                    <div className="flex items-center justify-between">
                        <h1>Category : <span className="font-semibold">{category}</span></h1>
                        <h1 className="flex gap-2 items-center text-2xl font-bold">
                            {
                                like ? <AiFillLike className="text-blue-800" /> : <SlLike className="text-xl cursor-pointer text-blue-800" onClick={handleVote} />
                            }
                            : <span className="font-semibold">{vote}</span></h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1>Questions :<span className="font-semibold">{details.questions}</span> </h1>
                        <h1>Target Audience : <span className="font-semibold">{details.target_audience}</span> </h1>
                    </div>
                    <div className="float-end">
                        <button onClick={handleBox} className="px-4 py-2 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded">Add Comments</button>
                    </div>
                    <form onSubmit={handleCommnets} className={`mt-5 ${box ? 'block' : 'hidden'} absolute top-5 border shadow-lg bg-white p-5 float-end w-full max-w-md mx-auto`}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Name</label>
                            <input id="LoggingEmailAddress" required name='name' defaultValue={user?.displayName} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                            <input id="LoggingEmailAddress" required name='email' defaultValue={user?.email} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Survey Title</label>
                            <input id="LoggingEmailAddress" required name='title' defaultValue={title} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                        </div>
                        <div className="mt-4">
                            <textarea name="comment" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Add your comment">
                            </textarea> <br />
                        </div>
                        <button className="ml-5 px-4 py-2 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded">Comment</button>
                    </form>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold">Comments ({forSurveyComment.length})</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                    {
                        forSurveyComment.map((comment, id) => <div className="p-5 border hover:border-blue-800 duration-300 rounded-lg space-y-5" key={id}>
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
        </div>
    );
};

export default SurveyDetails;