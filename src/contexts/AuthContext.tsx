import { ReactNode, createContext, useContext, useState } from "react";
import { IAuthContextProps } from "../models/AuthContextProps";

const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const authToken = localStorage.getItem('authToken');
        return !!authToken; // returns true or false
    });

    const [role, setRole] = useState('');

    const saveToken = (token: string, role: string) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("role", role);
        setIsAuthenticated(true);
        setRole(role);
    }

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("authToken");
        localStorage.removeItem("role");
        setRole('');
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: isAuthenticated,
            saveToken: saveToken,
            logout: logout,
            role: role,
        }}>{children}</AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthContext custom hook  must be used within AuthProvider component's descendents"
        );
    }

    return context;
}