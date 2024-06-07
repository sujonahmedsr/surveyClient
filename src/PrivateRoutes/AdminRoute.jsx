import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "./useAdmin";
import useAuth from "../AuthProvider/useAuth";

const AdminRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <p>loading....</p>
    }
    if(user && isAdmin){
        return children 
    }
    return <Navigate to={'/'} state={{from: location}} replace></Navigate>
};

export default AdminRoute;