import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="container px-4 mx-auto">
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;