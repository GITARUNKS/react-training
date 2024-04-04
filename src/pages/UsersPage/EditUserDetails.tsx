import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IUser } from "../../models/UserTypes";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ToastContainer, toast } from "react-toastify";

const EditUserDetails: React.FC = () => {
    const { register, reset, handleSubmit } = useForm<IUser>();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();
    const navigate = useNavigate();

    const getUserDetails = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            reset({
                name: response.data.name,
                phone: response.data.phone,
                email: response.data.email,
            });
        } catch (err) {
            console.log(err);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }
    useState(() => {
        getUserDetails();
    });

    const handleEditUser = (formData: IUser) => {
        setIsLoading(true);
        axios
            .put(`https://jsonplaceholder.typicode.com/users/${userId}`, formData)
            .then((res: AxiosResponse<IUser>) => {
                console.log(res);
                toast.success("User edited successfully !", {
                    position: "top-right",
                    onClose: () => {
                        setIsLoading(false);
                        navigate('/users')
                    }
                });
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                toast.error("Some Error Occurred. Try again later!", {
                    position: "top-right"
                });
            });
    }

    return (
        <div className="row">
            <Helmet>
                <title>Edit User Details</title>
            </Helmet>
            <h1>
                <Link to={`/users/${userId}`} className="btn btn-link">
                    &lt; Go Back
                </Link>
                Edit User Details
            </h1>

            <form className="col-md-6 offset-md-3" onSubmit={handleSubmit(handleEditUser)}>
                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="nameInput">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            {...register("name")}
                            id="nameInput"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            {...register("phone")}
                            id="phoneInput"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="emailInput" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            {...register("email")}
                            id="emailInput"
                            className="form-control"
                        />
                    </div>
                </div>

                {isError && (
                    <div className="alert alert-danger">
                        Some Error Occurred. Try again later!
                    </div>
                )}

                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button> 
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default EditUserDetails