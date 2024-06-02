import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Prizing from "../Pages/Prizing";

export const Routes = createBrowserRouter([{
    path: '/',
    element: <MainRoutes></MainRoutes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/Prizing',
            element: <Prizing></Prizing>
        }
    ]
}])