import { NavLink } from "react-router-dom"
import IMenu from "../models/MenuTypes"

const Menus: React.FC<IMenu> = (menu: IMenu) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to={menu.navigateTo}>
                {menu.title}
            </NavLink>
        </li>
    )
}

export default Menus