import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Prizing from "../Pages/Prizing";
import SurveyDetails from "../Pages/SurveyDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllSurvey from "../Pages/AllSurvey";

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
            path: '/Login',
            element: <Login></Login>
        },
        {
            path: '/SignUp',
            element: <SignUp></SignUp>
        },
        {
            path: '/AllSurvey',
            element: <AllSurvey></AllSurvey>
        },
        {
            path: '/sureveyDetails/:id',
            element: <SurveyDetails></SurveyDetails>,
        },
        {
            path: '/Prizing',
            element: <Prizing></Prizing>
        }
    ]
}])