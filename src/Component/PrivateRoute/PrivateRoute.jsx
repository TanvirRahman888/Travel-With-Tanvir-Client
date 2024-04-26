import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
const location =useLocation();
console.log(location.pathname);

    if (loading) {
       return <div className="flex items-center justify-center gap-3 h-svh mx-auto w-full">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }


    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;