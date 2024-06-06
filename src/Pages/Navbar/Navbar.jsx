import { Link, NavLink } from "react-router-dom";
import noUser from '../../assets/images/noUser.png'
import useAuth from "../../AuthProvider/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
const Navbar = () => {
    const { user, logOut } = useAuth()
    const styleNav = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#1E429F" : ""
        };
    }
    const handleLogout = () => {
        logOut()
        toast.success('Log Out successfully')
    }

    const [Profile, setProfile] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 bg-white border-b z-10">
            <nav className="container mx-auto">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-bold whitespace-nowrap  ">SURVEY<span className="text-blue-800">SKY</span></span>
                    </Link>

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {
                            user ? <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button onClick={() => setProfile(!Profile)} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src={user?.photoURL ? user?.photoURL : noUser} alt="user photo" />
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div className={`z-50 ${Profile ? 'block' : 'hidden'} absolute top-20 right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-80`}>
                                    <div className="px-4 pt-2">
                                        <span className="block text-base text-gray-900 font-semibold">{user?.displayName}</span>
                                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                    </div>
                                    <ul className="py-2 text-base" aria-labelledby="user-menu-button">
                                        <Link to={'/Dashboard'}>
                                            <li>
                                                <p className="block px-4 py-2  text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 ">Dashboard</p>
                                            </li>
                                        </Link>

                                        <li onClick={handleLogout}>
                                            <a href="#" className="block px-4 py-2  text-blue-800 dark:hover:bg-gray-600 dark:text-gray-200 ">Sign out</a>
                                        </li>
                                    </ul>
                                </div>

                                <button onClick={() => setNavOpen(!navOpen)} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                                :
                                <Link to={'/Login'} className="px-6 py-3 bg-blue-800 hover:bg-blue-700 duration-300 text-white font-semibold rounded-lg">Login</Link>
                        }


                    </div>
                    <div className={`items-center justify-between ${navOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 duration-300`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <NavLink to={'/'} style={styleNav}>
                                <p className="block py-2 px-3 rounded">Home</p>
                            </NavLink>
                            <NavLink to={'/AllSurvey'} style={styleNav}>
                                <p className="block py-2 px-3 rounded">Surveys</p>
                            </NavLink>
                            {/* <NavLink to={'/about'} style={styleNav}>
                                <p className="block py-2 px-3 rounded">About</p>
                            </NavLink> */}
                            <NavLink to={'/Prizing'} style={styleNav}>
                                <p className="block py-2 px-3 rounded">Pricing</p>
                            </NavLink>
                            <NavLink to={'/ContactUs'} style={styleNav}>
                                <p className="block py-2 px-3 rounded">Contact</p>
                            </NavLink>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;