import { Link } from "react-router-dom";
import { IUser } from "../../models/UserTypes"

const UserCard: React.FC<IUser> = (user) => {
    return (
        <div className="col-md-3 mt-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Phone: {user.phone}</p>
                    <Link to={`/users/${user.id}`}>View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default UserCard