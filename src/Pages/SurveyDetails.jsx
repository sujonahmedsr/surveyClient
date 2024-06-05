import { useLoaderData } from "react-router-dom";

const SurveyDetails = () => {
    const { category, created_at, description, details, image, title, votes } = useLoaderData()
    console.log(details);
    return (
        <div className="py-24 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                    <h1>Published Date : {created_at}</h1>
                        <h1>Read : {details.duration}</h1>
                    </div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p><b className="text-blue-800">{description}</b> At Survesky, we value your opinions and insights. Our diverse range of surveys is designed to gather feedback that helps us improve our services, products, and overall experience. By participating, you contribute to a better future for everyone involved. Explore our surveys and make your voice heard today!</p>
                    <p>Share your experience with our products and services. Your feedback helps us understand what we’re doing well and where we can improve, ensuring we meet your expectations and enhance your satisfaction.</p>

                    <div className="flex items-center justify-between">
                        <h1>Category : {category}</h1>
                        <h1>Votes : {votes}</h1>
                    </div>
                    <div className="flex items-center justify-between">
                    <h1>Questions : {details.questions}</h1>
                        <h1>Target Audience : {details.target_audience}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyDetails;