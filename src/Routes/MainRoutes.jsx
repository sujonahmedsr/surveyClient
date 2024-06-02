import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer";
import ScrolTop from "../components/ScrolTop";

const MainRoutes = () => {
    return (
        <div className="font-inter">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrolTop></ScrolTop>
        </div>
    );
};

export default MainRoutes;