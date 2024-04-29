import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handelRegisterForm = (e) => {
        e.preventDefault();
        console.log("object");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        console.log(name, photoURL, email, password);

        const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

        if (!isValidPassword(password)) {
           return Swal.fire({
            icon: "error",
            title: "Use a strong password",
            text: "Please use a strong password containing at least one uppercase letter, one lowercase letter, one digit, and must be at least 6 characters long.",
          });
        }


        //CreateUser
        createUser(email, password)
            .then((result) => {
                updateUserProfile(name, photoURL)
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
                console.log(result);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration Success",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Registration Decline",
                    text: "Please use another email address.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            });


    }
    return (
        <div className="max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 md:w-1/2 bg-slate-100 mx-auto my-32">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handelRegisterForm} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Name</label>
                    <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Photo URL</label>
                    <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Email</label>
                    <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Password</label>
                    <div className=" relative"> <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50  focus:dark:border-violet-600" />
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </div>
                    </div>

                </div>
                <button className="bg-blue-200 hover:bg-blue-300 font-bold text-lg py-3 block w-full p-3 text-center rounded-xl dark:text-gray-50 dark:bg-violet-600 ">Register</button>
            </form>
            <p className="text-center sm:px-6">Already have an account?
                <Link to={'/login'} className="underline ml-3 btn btn-success">Log In</Link>
            </p>

        </div>
    );
};

export default Register;