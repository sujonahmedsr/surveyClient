import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer";
import ScrolTop from "../components/ScrolTop";

const MainRoutes = () => {
    const location = useLocation()
    const noNavNoHed = location.pathname.includes('Login') || location.pathname.includes('SignUp')
    return (
        <div className="font-inter">
            {
                noNavNoHed || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                noNavNoHed || <Footer></Footer>
            }
            <ScrolTop></ScrolTop>
        </div>
    );
};

export default MainRoutes;