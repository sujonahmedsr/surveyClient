import { FaBook, FaUsers } from "react-icons/fa";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { MdPayments } from "react-icons/md";
import { useState } from "react";
import {  FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import useAdmin from "../../Hooks/useAdmin";
import { Helmet } from "react-helmet";
const AdminDashboard = () => {
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [isAdmin, isAdminLoading] = useAdmin();
    if (isAdminLoading) return <p>loading ....</p>
    return (
        <div className="flex">
            <Helmet>
                <title>
                    {
                        isAdmin ? 'Admin Dashboard' : 'User Dashboard'
                    }
                    </title>
            </Helmet>
            <h1 className="md:hidden block absolute top-5 left-5 cursor-pointer text-xl" onClick={() => setShow(!show)}><FaBars></FaBars></h1>
            <div className={`bg-blue-900 text-white fixed min-h-screen py-20 px-10 ${show ? 'block' : 'hidden'} md:block relative`}>
                <h1 className="md:hidden block absolute right-5 top-5 cursor-pointer text-xl" onClick={() => setShow(false)}><RxCross2 /></h1>
                <Link to={'/'}>
                    <h1 className="text-3xl font-bold">SURVEYSKY</h1>
                    <p className="text-xl font-semibold tracking-[10px]">surveysky</p>
                </Link>
                <div className="space-y-5 pt-10 font-semibold">
                    {
                        isAdmin ? <>
                            <NavLink to={'/Dashboard/AllUsers'} className="flex items-center gap-2">
                                <FaBook className="text-2xl"></FaBook>
                                <button>MANAGE USERS</button>
                            </NavLink>
                            <NavLink to={'/Dashboard/AllPayments'} className="flex items-center gap-2">
                                <MdPayments className="text-2xl"></MdPayments>
                                <button>ALL PAYMENTS</button>
                            </NavLink>
                           
                        </> : <>
                            
                            <NavLink to={'/Dashboard/participated'} className="flex items-center gap-2">
                                <FaUsers className="text-2xl"></FaUsers>
                                <button>Participated</button>
                            </NavLink>

                            <NavLink to={'/Dashboard/comments'} className="flex items-center gap-2">
                                <FaBook className="text-2xl"></FaBook>
                                <button>My Comments</button>
                            </NavLink>
                            
                        </>
                    }

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
            </div>
            <div className="w-full p-10">
                {location.pathname === '/Dashboard' ?
                    isAdmin ?
                    <h1 className="text-center text-3xl font-bold">Admin</h1>
                    :
                    <h1 className="text-center text-3xl font-bold">User</h1>
                    :
                    ''
                }
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;