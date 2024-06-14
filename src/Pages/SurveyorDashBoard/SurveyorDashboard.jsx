import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaAddressBook, FaBars, FaUsers } from "react-icons/fa";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const SurveyorDashboard = () => {
    const location = useLocation()
    const [show, setShow] = useState(false)
    return (
        <div className="flex">
            <Helmet>
                <title>
                    Surveyor Dashboard
                </title>
            </Helmet>
            <h1 className="md:hidden block absolute top-5 left-5 cursor-pointer text-xl" onClick={() => setShow(!show)}><FaBars></FaBars></h1>
            <div className={`bg-blue-900 text-white fixed min-h-screen py-20 px-10 ${show ? 'block' : 'hidden'} md:block relative space-y-5`}>
                <h1 className="md:hidden block absolute right-5 top-5 cursor-pointer text-xl" onClick={() => setShow(false)}><RxCross2 /></h1>
                <Link to={'/'}>
                    <h1 className="text-3xl font-bold">SURVEYSKY</h1>
                    <p className="text-xl font-semibold tracking-[10px]">surveysky</p>
                </Link>
                <NavLink to={'/Surveyor/Surveyor'} className="flex items-center gap-2">
                    <FaUsers className="text-2xl"></FaUsers>
                    <button>Create Survey</button>
                </NavLink>
                <NavLink to={'/Surveyor/MySurvey'} className="flex items-center gap-2">
                    <FaAddressBook className="text-2xl"></FaAddressBook>
                    <button>My Surveys</button>
                </NavLink>


                <div className="divider bg-white h-1"></div>

                <NavLink to='/' className="flex items-center gap-2">
                    <IoMdHome className="text-2xl"></IoMdHome>
                    <button>HOME</button>
                </NavLink>
                <NavLink to='/AllSurvey' className="flex items-center gap-2">
                    <IoMdMenu className="text-2xl"></IoMdMenu>
                    <button>SURVEY</button>
                </NavLink>
                <NavLink to={'/ContactUs'} className="flex items-center gap-2">
                    <MdEmail className="text-2xl"></MdEmail>
                    <button>CONTACT</button>
                </NavLink>
            </div>
            <div className="w-full p-10">
                {location.pathname === '/Surveyor' &&
                    <h1 className="text-3xl font-bold text-center">Surveyor</h1>
                }
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default SurveyorDashboard;