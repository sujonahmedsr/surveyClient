const Faq = () => {
    return (
        <div className="pt-10">
            <section className="">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-blue-800">-- How it works --</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-blue-800">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="flex items-center justify-between w-full p-8">
                                <h1 className="text-xl font-semibold">What is Surveysky?</h1>

                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <hr className="border-gray-200 " />

                            <p className="p-8 text-base">
                                Surveysky is an online platform that allows users to create, distribute, and analyze surveys effortlessly. Our goal is to help you gather valuable feedback from your audience to improve your services, products, or overall experience.
                            </p>
                        </details>
                        <details>
                            <summary className="flex items-center justify-between w-full p-8">
                                <h1 className="text-xl font-semibold">How do I create a survey?</h1>

                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <hr className="border-gray-200 " />

                            <p className="p-8 text-base ">
                                Creating a survey on Surveysky is easy. Simply sign up for an account, navigate to the Create Survey section, and follow the intuitive steps to add questions, set up logic, and customize your survey’s design. You can preview and test your survey before distributing it to your audience.
                            </p>
                        </details>
                        <details>
                            <summary className="flex items-center justify-between w-full p-8">
                                <h1 className="text-xl font-semibold">What types of questions can I include in my survey?</h1>

                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <hr className="border-gray-200 " />

                            <p className="p-8 text-base ">
                                Surveysky supports a variety of question types, including multiple choice, open-ended, rating scales, Likert scales, and more. You can mix and match question types to create a comprehensive survey that meets your needs.
                            </p>
                        </details>
                        <details>
                            <summary className="flex items-center justify-between w-full p-8">
                                <h1 className="text-xl font-semibold">How can I distribute my survey?</h1>

                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <hr className="border-gray-200 " />

                            <p className="p-8 text-base">
                                Once your survey is ready, you can distribute it via email, social media, or a direct link. Surveysky also provides embed codes for adding surveys directly to your website or blog. We offer integration with popular tools to make distribution seamless.
                            </p>
                        </details>
                        <details>
                            <summary className="flex items-center justify-between w-full p-8">
                                <h1 className="text-xl font-semibold">Is my data secure?</h1>

                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <hr className="border-gray-200 " />

                            <p className="p-8 text-base">
                                Yes, at Surveysky, we prioritize data security. All data is encrypted and stored securely. We comply with industry standards and regulations to ensure that your data and your respondents data are protected.
                            </p>
                        </details>
                        <details>
                            <summary className="flex items-center justify-between w-full p-8">
                                <h1 className="text-xl font-semibold">Can I analyze the survey results?</h1>

                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <hr className="border-gray-200 " />

                            <p className="p-8 text-base">
                                Absolutely! Surveysky offers robust analytics tools to help you analyze your survey results. You can view summary statistics, filter responses, and generate detailed reports. Our visualizations make it easy to interpret the data and gain insights.
                            </p>
                        </details>
                        <details>
                            <summary className="flex items-center justify-between w-full p-8">
                                <h1 className="text-xl font-semibold">What support options are available?</h1>

                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <hr className="border-gray-200 " />

                            <p className="p-8 text-base ">
                                We offer a range of support options, including a comprehensive help center, video tutorials, and customer support via email and chat. Our team is dedicated to helping you get the most out of Surveysky.
                            </p>
                        </details>
                        <hr className="border-gray-200 " />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;