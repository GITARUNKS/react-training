// Functional component with Named function

/**  Skeleton of the component
  *  Component can have imports
  *  function name should be same as filename including casing
  *  must have a function which returns JSX
  *  must have export
*/
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useCartContext } from "../contexts/CartContext";
import MenuList from "./MenuList";

//function Header() {
const Header: React.FC = () => {
    const addToCartContext = useCartContext();
    const authContext = useAuthContext()

    //must return JSX
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        React App
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <MenuList/>
                    </div>
                    {authContext.isAuthenticated? <button className="btn btn-danger">Cart ({addToCartContext?.cartItems.length})</button>: ''}
                </div>
            </nav>
        </header>
    );
}

export default Header;
