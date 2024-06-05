import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
// import useAuth from "../AuthProvider/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { auth } from "../firebase/Firebase";
import useAuth from "../AuthProvider/useAuth";

const SignUp = () => {
    const [show, setShow] = useState(false);
    const { createUser, user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            return setError('Password must be 6 character')
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            setError('your password should be one uppercase and one lowercase and at least one numer')
            return
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                toast('sign up successfully')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    if(user) return 
    return (
        <div className="py-24 px-3">
            <form onSubmit={handleCreateUser} className=" container mx-auto px-6 py-8 md:px-8 max-w-lg border shadow-xl">
            <div className="text-center">
                    <Link to={'/'} className='text-2xl font-black text-blue-800 '>SurveySky <span className="font-medium">(Home)</span></Link>
                </div>
                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back! Please Sign Up Hurry Up
                </p>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Your Full Name</label>
                    <input id="LoggingName" required name='name' placeholder='enter your name' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                    <input id="LoggingEmailAddress" required name='email' placeholder='enter email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                </div> 

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>

                    <div className="relative">
                        <input id="loggingPassword" required name='password' placeholder='password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type={`${show ? 'text' : 'password'}`} />
                        <p onClick={() => setShow(!show)} className="absolute top-1/4 right-3 cursor-pointer text-2xl">{show ? <FaRegEye /> : <FaRegEyeSlash />}</p>
                    </div>
                </div>
                {
                    error && <p className='text-red-600 font-semibold pt-3'>{error}</p>
                }
                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-700">
                        Sign Up
                    </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to={'/Login'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign in</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </form>
        </div>
    );
};

export default SignUp;