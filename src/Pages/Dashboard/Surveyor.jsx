import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../AuthProvider/useAuth";

const image_hosting_key = '803136a7497d91a1a1a5d7c2e6acac5b';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Surveyor = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const startDate = new Date()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const sureveyDetails = {
                title: data.title,
                description: data.description,
                image: res.data.data.display_url,
                category: data.category,
                votes: data.votes,
                created_at: new Date().toLocaleDateString(),
                email: user?.email
            }
            console.log(sureveyDetails);
            const surveyRes = await axiosSecure.post('/survey', sureveyDetails)
            if (surveyRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    return (
        <div>
            <div className="text-center">
                <h1>--Survey--</h1>
                <h1 className="text-3xl font-semibold">Survey Create as a Surveyor</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Survey Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Survey title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Market Research">Market Research</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Customer Satisfaction">Customer Satisfaction</option>
                                <option value="Employee Engagement">Employee Engagement</option>
                                <option value="Product Feedback">Product Feedback</option>
                                <option value="Usability">Usability</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Education">Education</option>
                                <option value="Event Feedback">Event Feedback</option>
                            </select>
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Vote*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="votes"
                                value={0}
                                {...register('votes', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Date*</span>
                            </label>
                            <DatePicker selected={startDate} name="date" className="block w-full px-5 py-2.5 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></DatePicker>
                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Survey Details</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="px-6 py-3 rounded-lg bg-blue-800 hover:bg-blue-700 duration-300 text-white font-semibold">
                        Add Survey
                    </button>
                </form>
        </div>
    );
};

export default Surveyor;