import { NavLink} from "react-router-dom";


function NavBar() {
    return (
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/todos'>Todos</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;