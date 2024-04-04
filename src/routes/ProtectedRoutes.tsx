import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
    // Check if the user is authenticated or not
        // How? Check in local storage.
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
            <Navigate to="/auth/login" />
        )
    }
}

export default ProtectedRoutes