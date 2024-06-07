import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Prizing from "../Pages/Prizing";
import SurveyDetails from "../Pages/SurveyDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllSurvey from "../Pages/AllSurvey";
import ContactUs from "../Pages/ContactUs";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import Comments from "../Pages/Dashboard/Comments";

export const Routes = createBrowserRouter([
    {
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
                element: <AllSurvey></AllSurvey>,
            },
            {
                path: '/sureveyDetails/:id',
                element: <PrivateRoutes>
                    <SurveyDetails></SurveyDetails>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://survey-crud.vercel.app/survey/${params.id}`)
            },
            {
                path: '/Prizing',
                element: <Prizing></Prizing>
            },
            {
                path: '/ContactUs',
                element: <PrivateRoutes>
                    <ContactUs></ContactUs>
                </PrivateRoutes>
            }
        ],

    },
    {
        path: '/Dashboard',
        element: <AdminDashboard></AdminDashboard>,
        children: [
            {
                path: '/Dashboard/comments',
                element: <Comments></Comments>
            }
        ]
    }
])