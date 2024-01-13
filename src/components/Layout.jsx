import NavBar from "./NavBar/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer.jsx";

function Layout() {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;