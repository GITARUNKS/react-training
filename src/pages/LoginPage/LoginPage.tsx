import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

interface IFormLogin {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const { register, handleSubmit, formState } = useForm<IFormLogin>();
    const navigate = useNavigate();
    const location = useLocation();
    const authContext = useAuthContext();

    const handleLogin: SubmitHandler<IFormLogin> = async (formData) => {
        console.log(formData);
        // The above formData should be sent to REST API
        try {
            const response = await axios.post("https://reqres.in/api/login", formData);
            // the JWT token should be stored in cookie / local storage / session storage  - Doing it via useContext() 
            authContext?.saveToken(response.data.token, "SUPER_ADMIN");
            // Navigate to some page post successful login
            navigate(location.state ? location.state : "/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="col-md-4 offset-md-4">
            <h2>Login</h2>

            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("email")}
                        disabled={formState.isSubmitting}
                        defaultValue="eve.holt@reqres.in"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password")}
                        disabled={formState.isSubmitting}
                        defaultValue="cityslicka"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    disabled={formState.isSubmitting}
                >
                    {formState.isSubmitting ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;