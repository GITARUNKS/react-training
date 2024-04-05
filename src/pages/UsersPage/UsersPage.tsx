import { Link } from "react-router-dom";
//import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import UserCard from "./UserCard";
import { IUser } from "../../models/UserTypes"

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    //Use Effect will be called after initial rendering.
    //Ideal place to send REST API calls.

    /*
      How to make a REST API call from Component?
      we need to know following:
      1. REST API Endpoint
      2. Method of the API - Http Method
      3. REST API Client - Native JS (fetch api) or Axios (Recommended)
    */
    axios
      .get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      .then((res: AxiosResponse<IUser[]>) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // empty array is dependency. Purpose is to avoid re-rendering

  return (
    <>
      {/* <Helmet>
        <title>Users</title>
      </Helmet> */}
      <div className="my-3">
        <div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
          <h1 className="text-body-emphasis">User Management App!</h1>
          <p className="col-lg-6 mx-auto mb-4">
            Efficiently manage users with ease using the User Management App!"
          </p>
          <Link className="btn btn-primary px-5 mb-5" to="add">
            Add User
          </Link>
        </div>
      </div>

      <div className="row">
        <h2>List Users</h2>

        {isLoading && (
          <div className="text-center">
            <div className="spinner-border text-success" role="status"></div>
            <p>Please wait while we load users</p>
          </div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some Error occurred! Try again later!
          </div>
        )}

        {/* List and Keys */}
        {users.map((user: IUser) => {
          return (
            <UserCard
              id={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              key={user.id}
            />
          );
        })}

      </div>
    </>
  );
};

export default UsersPage;
