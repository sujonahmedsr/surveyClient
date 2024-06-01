import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const MainRoutes = () => {
    return (
        <div className="font-inter">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoutes;