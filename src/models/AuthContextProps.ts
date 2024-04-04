export interface IAuthContextProps {
    isAuthenticated: boolean;
    role?: string | undefined;
    saveToken: (token: string, role: string) => void;
    logout: () => void;
}