import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks=<>
    <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={'/'}>Home</Link></li>
    <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={''}>All Tourists Spot</Link></li>
    <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={''}>Add Tourists Spot</Link></li>
    <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={''}>My List</Link></li>
    <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={''}>About Us</Link></li>
    <li className="text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={''}>Contact Us</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
                    <a className="btn text-xl border-2 border-blue-300 hover:border-blue-800 rounded-xl mx-3"><Link to={'/login'}>Log In</Link></a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;