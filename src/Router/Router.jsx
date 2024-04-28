import { createBrowserRouter } from 'react-router-dom';
import Root from '../Component/Root/Root';
import Login from '../Component/Login/Login';
import Register from '../Component/Login/Register/Register';
import AddTouristSpot from '../Component/AddTouristSpot/AddTouristSpot';
import PrivateRoute from '../Component/PrivateRoute/PrivateRoute';
import UpdateProfile from '../Component/UpdateProfile/UpdateProfile';
import Home from '../Component/Home/Home';
import TouristSpot from '../Component/TouristSpot/TouristSpot';
import SpotDetails from '../Component/SpotDetails/SpotDetails';
import MyList from '../Component/MyList/MyList';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/TouristSpot',
                element: <TouristSpot></TouristSpot>,
                loader:()=>fetch('http://localhost:5000/TouristSpot')
            },
            {
                path: '/TouristSpot/:id',
                element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/TouristSpot/${params.id}`)
            },
            {
                path: '/MyList/:email',
                element:<PrivateRoute><MyList></MyList></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/MyList/${params.email}`)
            },
            {
                path: '/updateprofile',
                element: <UpdateProfile></UpdateProfile>
            },
                        {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updateprofile',
                element: <UpdateProfile></UpdateProfile>
            },
            
        ]
    },
]);

export default Router;