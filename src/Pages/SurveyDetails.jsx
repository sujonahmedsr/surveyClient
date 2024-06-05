import { Link, useLoaderData } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { SlLike } from "react-icons/sl";
import { TbArrowBackUp } from "react-icons/tb";
const SurveyDetails = () => {
    const { category, created_at, description, details, image, title, votes } = useLoaderData()
    console.log(details);
    return (
        <div className="py-28 container mx-auto px-4">
            <Link to={-1} className="text-base flex items-center gap-2 text-blue-800 hover:text-blue-700 font-semibold"><TbArrowBackUp className="text-2xl"></TbArrowBackUp> Go Back</Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
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
                        <h1 className="flex gap-2 items-center text-2xl font-bold"> <SlLike className="text-xl" /> : <span className="font-semibold">{votes}</span></h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1>Questions :<span className="font-semibold">{details.questions}</span> </h1>
                        <h1>Target Audience : <span className="font-semibold">{details.target_audience}</span> </h1>
                    </div>
                    <div className="float-end">
                        <button className="px-4 py-2 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded">Add Comments</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold">Comments (0)</h1>
            </div>
        </div>
    );
};

export default SurveyDetails;