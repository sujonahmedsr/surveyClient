import { Link } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";

const Prizing = () => {
    const { user } = useAuth()
    return (
        <div className="container mx-auto px-4 pt-32 pb-5">
            <div className="text-center ">
                <h1 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-blue-800">Choose a plan that works for you</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className="border border-blue-300 hover:border-blue-800 transition duration-300 p-5 rounded-lg relative overflow-hidden">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800">Team Advantage</h1>
                        <p className="text-gray-500"><span className="text-2xl text-blue-800 font-semibold">$25</span>/ user / month</p>
                        <p className="text-gray-500">Starting at 3 users, billed annually</p>
                        {
                            user ? <Link>
                                <button className="w-full mt-4 py-3 rounded-lg bg-blue-800 text-white font-bold text-xl">
                                    BUY NOW
                                </button>
                            </Link>
                                :
                                <Link>
                                    <button className="w-full py-3 rounded-lg bg-blue-800 text-white font-bold text-xl">
                                        SIGN UP
                                    </button>
                                </Link>
                        }
                    </div>
                    <div className="absolute top-5 -right-10 bg-blue-800 text-white font-semibold rotate-45 px-10 py-2">
                        <h1>Save 25%</h1>
                    </div>
                    <ul className="text-sm space-y-3 list-disc pl-5 pt-10 text-gray-600">
                        <li>Survey sharing with fine control over who can view and edit</li>
                        <li>Gather comments all in one place</li>
                        <li>Let team members analyze, filter, and export results</li>
                        <li>Notify others when you get new responses</li>
                        <li>Shared asset library for on-brand surveys</li>
                        <li>Add Contributor Seats</li>
                        <li>Add or reassign accounts at any time</li>
                        <li>Free integrations with popular collaboration apps</li>
                        <li>50,000 responses per year**</li>
                        <li>24/7 expedited email support</li>
                        <li>Text analysis & statistical significance</li>
                        <li>Advanced analyze features</li>
                        <li>SurveySky industry benchmarks</li>
                        <li>Multilingual surveys</li>
                        <li>Quizzes with custom feedback</li>
                    </ul>
                </div>
                <div className="border border-sky-300 hover:border-sky-600 transition duration-300 p-5 rounded-lg relative overflow-hidden">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800">Team Premier
                        </h1>
                        <p className="text-gray-500"><span className="text-2xl text-sky-600 font-semibold">$75</span>/ user / month</p>
                        <p className="text-gray-500">Starting at 3 users, billed annually</p>
                   
                        {
                            user ? <Link>
                                <button className="w-full mt-4 py-3 rounded-lg bg-sky-600 text-white font-bold text-xl">
                                    BUY NOW
                                </button>
                            </Link>
                                :
                                <Link>
                                    <button className="w-full py-3 rounded-lg bg-sky-600 text-white font-bold text-xl">
                                        SIGN UP
                                    </button>
                                </Link>
                        }
                    </div>
                    <div className="absolute top-5 -right-10 bg-sky-600 text-white font-semibold rotate-45 px-10 py-2">
                        <h1>Save 25%</h1>
                    </div>
                    <ul className="text-sm space-y-3 list-disc pl-5 pt-10 text-gray-600">
                        <li>Survey sharing with fine control over who can view and edit</li>
                        <li>Gather comments all in one place</li>
                        <li>Let team members analyze, filter, and export results</li>
                        <li>Notify others when you get new responses</li>
                        <li>Shared asset library for on-brand surveys</li>
                        <li>Add Contributor Seats</li>
                        <li>Add or reassign accounts at any time</li>
                        <li>Free integrations with popular collaboration apps</li>
                        <li>100,000 responses per year**</li>
                        <li>Phone support and 24/7 email support</li>
                        <li>Text analysis & statistical significance</li>
                        <li>Advanced analyze features</li>
                        <li>SurveySky industry benchmarks</li>
                        <li>Multilingual surveys</li>
                        <li>Quizzes with custom feedback</li>
                    </ul>
                </div>
                <div className="border border-green-300 hover:border-green-600  transition duration-300 p-5 rounded-lg relative overflow-hidden flex-grow">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800">Enterprise</h1>

                        <p className="text-gray-500">Powerful admin tools, integrations, and collaboration features for your organization.</p>
                        <button className="w-full py-3 rounded-lg bg-green-600 text-white font-bold text-xl">CONTACT US</button>
                    </div>
                    <ul className="text-sm space-y-3 list-disc pl-5 pt-10 text-gray-600">
                        <li>Survey sharing with fine control over who can view and edit</li>
                        <li>Gather comments all in one place</li>
                        <li>Let team members analyze, filter, and export results</li>
                        <li>Notify others when you get new responses</li>
                        <li>Shared asset library for on-brand surveys</li>
                        <li>Add Contributor Seats</li>
                        <li>Add or reassign accounts at any time</li>
                        <li>Free integrations with popular collaboration apps</li>
                        <li>50,000 responses per year**</li>
                        <li>24/7 expedited email support</li>
                        <li>Text analysis & statistical significance</li>
                        <li>Advanced analyze features</li>
                        <li>SurveySky industry benchmarks</li>
                        <li>Multilingual surveys</li>
                        <li>Quizzes with custom feedback</li>
                    </ul>
                </div>
            </div>
            <div className="pt-5 text-sm text-gray-500 space-y-3">
                <p> *Displayed pricing represents a 20% or more savings per user per month compared to individual Advantage and Premier plans</p>
                <p>**$0.15 per additional response. SurveyMonkey Audience responses sold separately</p>
                <p>***Add-on features available with Enterprise plan must be purchased separately</p>
            </div>
            <div className="text-center my-5 py-5 text-xl font-bold text-blue-900 bg-blue-200">
                <h1>SurveyMonkey Audience includes access to Paid Features</h1>
            </div>
        </div>
    );
};

export default Prizing;