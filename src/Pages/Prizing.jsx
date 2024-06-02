
const Prizing = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center pt-32">
                <h1 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-blue-800">Choose a plan that works for you</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="border hover:border-blue-800 transition duration-300 p-5 rounded-lg">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold">Team Advantage</h1>
                        <p className="text-gray-500"><span className="text-2xl text-blue-800 font-semibold">$25</span>/ user / month</p>
                        <p className="text-gray-500">Starting at 3 users, billed annually</p>
                        <button className="w-full py-3 rounded-lg bg-">SIGN UP</button>
                    </div>
                    <ul className="text-sm space-y-3 list-disc pl-5 pt-5">
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

        </div>
    );
};

export default Prizing;