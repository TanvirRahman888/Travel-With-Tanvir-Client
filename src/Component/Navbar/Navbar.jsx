import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => alert("Welcome Back"))
            .catch(() => alert("You are Here"))
    }
    const navLinks = <>
        <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={'/'}>Home</Link></li>
        <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={'/TouristSpot'}>All Tourists Spot</Link></li>
        <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={'addTouristSpot'}>Add Tourists Spot</Link></li>
        {
            user ? <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={`/MyList/${user.email}`}>My List</Link></li> : <></>
        }

        <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={''}>About Us</Link></li>
        <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={''}>Contact Us</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/YT1X3Jr/a10-Logo2.png" className="w-20" alt="Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    {
                        user ?
                            <div className="flex items-center ">
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className=" m-1">
                                        <div className="h-12 w-12 m-2 rounded-lg p-1 border-2 border-green-500"> <img src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                        <li><a>{user.displayName}</a></li>
                                        <li><Link to={'/UpdateProfile'}>Update Profile</Link></li>
                                        <li><Link onClick={handelLogOut}> <a className="">Log Out</a> </Link></li>
                                    </ul>
                                </div>

                            </div>
                            :
                            <Link to={'/login'}> <a className="btn font-bold text-xl animate__animated animate__swing bg-blue-300 hover:bg-blue-400">Get Access</a> </Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;