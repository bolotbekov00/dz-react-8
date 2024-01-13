import {NavLink} from "react-router-dom";


function NavBar() {
    return (
        <ul>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/todo">Todo</NavLink>
            </li>
            <li>
                <NavLink to="/todoAdd">AddTodo</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;