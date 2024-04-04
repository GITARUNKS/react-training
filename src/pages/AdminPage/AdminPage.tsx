import { useAuthContext } from "../../contexts/AuthContext"

const AdminPage: React.FC = () => {
    const {role} = useAuthContext();

    if (role !== 'SUPER_ADMIN'){
        return (
            <div className="alert alert-warning">
                You do not have rights to view this page. You must be a SUPER ADMIN.
            </div>
        )
    }else{
        return (
            <div>
                <h1>Admin Page</h1>
                <p>Hello Admin !!!</p>
                <p>The page will load only for SUPER ADMIN users</p>
            </div>
          )
    }
}

export default AdminPage