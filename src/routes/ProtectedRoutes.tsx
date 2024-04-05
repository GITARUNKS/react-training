import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
    // Check if the user is authenticated or not
        // How? Check using Auth Context
    // If authenticated 
        // then, show the protected routes
    // else
        // redirect to login page
    const authContext = useAuthContext()
 
    if(authContext.isAuthenticated) {
        return (
            <Outlet />
        )
    } else {
         return (
             <Navigate to="/auth/login" state={location.pathname} />
         )
    }
}

export default ProtectedRoutes