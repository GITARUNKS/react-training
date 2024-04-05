import Menus from "./Menus";
import IMenu from "../models/MenuTypes";
import { useAuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

// Functional component with Arrow function
const MenuList = () => {
  const authContext = useAuthContext();
  const menus = [
    {
      id: 1,
      navigateTo: "/",
      title: "Home",
      isPublic: true,
    },
    {
      id: 2,
      navigateTo: "/netflix",
      title: "Netflix",
      isPublic: false,
    },
    {
      id: 3,
      navigateTo: "/users",
      title: "Manage Users",
      isPublic: false,
    },
    {
      id: 4,
      navigateTo: "/todos",
      title: "To Do",
      isPublic: false,
    },
    {
      id: 5,
      navigateTo: "/products",
      title: "Products",
      isPublic: false,
    },
    {
      id: 6,
      navigateTo: "/about-us",
      title: "About Us",
      isPublic: true,
    },
    {
      id: 8,
      navigateTo: "/contact-us",
      title: "Contact Us",
      isPublic: true,
    },
    {
      id: 9,
      navigateTo: "/auth/login",
      title: "Login",
      isPublic: true,
    },
    {
      id: 10,
      navigateTo: "/admin",
      title: "Admin",
      isPublic: false,
    },
    {
      id: 11,
      navigateTo: "/unit-testing-demo",
      title: "Unit Testing Demo",
      isPublic: true,
    },
  ]

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menus.map((menu: IMenu) => {
        return ((authContext.isAuthenticated && menu.title !== 'Login' && menu.title !== 'Admin')
          || (authContext.isAuthenticated && menu.title == 'Admin' && authContext.role === 'SUPER_ADMIN')
          || (!authContext.isAuthenticated && menu.isPublic)) ?
          (<Menus
            key={menu.id}
            title={menu.title}
            isPublic={menu.isPublic}
            navigateTo={menu.navigateTo}
          />) : ''
      })}
      {authContext.isAuthenticated && <Link className="nav-link" onClick={authContext.logout} to="">Logout</Link>}
    </ul>
  );
}

export default MenuList;