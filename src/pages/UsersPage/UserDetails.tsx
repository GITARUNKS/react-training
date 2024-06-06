import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../../models/UserTypes";
import { ToastContainer, toast } from "react-toastify";

const UserDetails: React.FC = () => {

  const [user, setUser] = useState<IUser>();
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  //Reading URL Parameter from the URL using react-router-dom
  const { userId } = useParams();
  //For Reading Query Parameter from the URL use - useSearchParams() of react-router-dom
  // const [queryParams] = useSearchParams();
  // console.log(queryParams.get("queryName");

  const getUserDetails = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUser(response.data);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getUserDetails();
  },[]);

  const handleDeleteUser = async () => {
    try {
      setIsDeleting(true);
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      console.log(response);
      toast.success("User deleted successfully !", {
        position: "top-right",
        onClose: () => {
          setIsDeleting(false);
          const deleteUserModal = document.getElementById('deleteUserModal');
          if (deleteUserModal) {
            deleteUserModal.classList.remove('show');
            deleteUserModal.setAttribute('aria-hidden', 'true');
            deleteUserModal.setAttribute('style', 'display : none');
            //document.body.classList.remove('modal-open');
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
              modalBackdrop.remove();
            }
          }
          history.back();
        }
      });
    } catch (err) {
      setIsDeleting(false);
      console.log(err);
      toast.error("Some Error Occurred. Try again later!", {
        position: "top-right"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>User Details</title>
      </Helmet>
      <h1>User Details</h1>
      <Link to="/users" className="btn btn-link">
        Go Back
      </Link>

      {isLoading && (
        <div className="text-center">
          <div className="spinner-border text-success" role="status"></div>
          <p>Please wait while we load users</p>
        </div>
      )}

      {isError ? (
        <div className="alert alert-danger">
          Some Error occurred! Try again later!
        </div>
      ) : (
        <div className="card">
          <div className="card-header">You are seeing details of User ID: {user?.id}</div>
          <div className="card-body">
            <h5 className="card-title">Name: {user?.name}</h5>
            <p className="card-text">E-Mail: {user?.email}</p>
            <p className="card-text">Phone: {user?.phone}</p>

            <div>
              <Link to={`/users/${userId}/edit`} className="btn btn-primary">
                Edit
              </Link>
              <span> </span>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-toggle="modal"
                data-bs-target="#deleteUserModal"
              >
                Delete
              </button>
              <div
                className="modal fade"
                id="deleteUserModal"
                tabIndex={-1}
                aria-labelledby="deleteUserModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Delete User
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <p>Are you sure you want to delete the User?</p>
                    </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          disabled={isDeleting}
                        >
                          No
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleDeleteUser} disabled={isDeleting}>
                          Yes
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      )
      }
    </>
  );
};

export default UserDetails