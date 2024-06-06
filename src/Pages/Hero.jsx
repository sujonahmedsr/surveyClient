import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative">

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-full h-[100vh]" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <g mask="url(&quot;#SvgjsMask1416&quot;)" fill="none">
                    <rect width="1440" height="560" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1417&quot;)"></rect>
                    <path d="M1440 0L1093 0L1440 122.28z" fill="rgba(255, 255, 255, .1)"></path>
                    <path d="M1093 0L1440 122.28L1440 221.8L920.11 0z" fill="rgba(255, 255, 255, .075)"></path>
                    <path d="M920.11 0L1440 221.8L1440 333.91L851.28 0z" fill="rgba(255, 255, 255, .05)"></path>
                    <path d="M851.28 0L1440 333.91L1440 487.40000000000003L555.65 0z" fill="rgba(255, 255, 255, .025)"></path>
                    <path d="M0 560L213.53 560L0 502.77z" fill="rgba(0, 0, 0, .1)"></path>
                    <path d="M0 502.77L213.53 560L216.44 560L0 432.42999999999995z" fill="rgba(0, 0, 0, .075)"></path>
                    <path d="M0 432.43L216.44 560L859.1800000000001 560L0 430.8z" fill="rgba(0, 0, 0, .05)"></path>
                    <path d="M0 430.8L859.1800000000001 560L861.7600000000001 560L0 156.65000000000003z" fill="rgba(0, 0, 0, .025)"></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1416">
                        <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                    <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1417">
                        <stop stopColor="#0e2a47" offset="0"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.02"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.09"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.16"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.17"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.17"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.17"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.19"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.24"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.38"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.38"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.52"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.63"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.76"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.85"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.94"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.95"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="0.97"></stop>
                        <stop stopColor="rgba(0, 100, 158, 0.22)" offset="1"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute top-0 left-0 w-full">
                <div className="flex flex-col inset-16 items-center h-[90vh] justify-center text-white text-center max-w-3xl mx-auto pt-10 p-4">
                    <h1 className="text-5xl font-bold mb-4 text-blue-800">Welcome to Our SurveySky</h1>
                    <p className="text-xl mb-8 text-black">  We value your feedback and strive to improve our services. Your opinions are essential for us to
                        understand what we are doing well and where we can make improvements. Please take a few moments
                        to complete this survey and share your thoughts.</p>
                    <Link to={'/AllSurvey'} className="bg-blue-800 hover:bg-blue-900 transition duration-300 text-white font-bold py-2 px-4 rounded">
                        Start Survey
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;