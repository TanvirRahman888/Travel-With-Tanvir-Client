import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ThemeSwitcher from "../ThemeSwitcher";

const Root = () => {
    return (
        <div className="container px-4 mx-auto dark:bg-orange-500">
            <Navbar/>
            <Outlet></Outlet>
            <Footer></Footer>
            <ThemeSwitcher></ThemeSwitcher>
            
        </div>
    );
};

export default Root;