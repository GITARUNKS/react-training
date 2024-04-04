import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IUser } from "../../models/UserTypes";
import axios, { AxiosResponse } from "axios";
import { Helmet } from "react-helmet-async";

const AddUser: React.FC = () => {

  const [isSaved, setIsSaved] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>();

  const handleAddUser = (formData: IUser) => {
    console.log(formData);
    setIsLoading(true);
    /*
      How to make a REST API call from Component?
      we need to know following:
      1. REST API Endpoint - URL
      2. Method of the API - POST
      3. REST API Client - Native JS (fetch api) or Axios (Recommended)
      4. FORM Data to be passed for POST method
    */
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res: AxiosResponse<IUser>) => {
        console.log(res);
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <div className="row">
      <Helmet>
        <title>Create User</title>
      </Helmet>
      <h1>
        <Link to="/users" className="btn btn-link">
          &lt; Go Back
        </Link>
        Add User
      </h1>

      <form className="col-md-6 offset-md-3" onSubmit={handleSubmit(handleAddUser)}>
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="nameInput"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", { required: true, maxLength: 30 })}
              className="form-control"
              placeholder="Enter Name"
            />
            {/* use role="alert" to announce the error message */}
            {errors.name && errors.name.type === "required" && (
              <p className="text-danger mt-3" role="alert">This is required</p>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <p className="text-danger mt-3" role="alert">Max length exceeded</p>
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              aria-invalid={errors.phone ? "true" : "false"}
              {...register("phone", { required: true})}
              id="phoneInput"
              className="form-control"
              placeholder="Enter Phone"
            />
            {errors.phone && errors.phone.type === "required" && (
              <p className="text-danger mt-3" role="alert">This is required</p>
            )}
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
              placeholder="Enter Email"
            />
          </div>
        </div>

        {isSaved && (
          <div className="alert alert-success">Saved Successfully</div>
        )}

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
    </div>
  );
};

export default AddUser;