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
import UpdateTouristSpot from '../Component/UpdateTouristSpot/UpdateTouristSpot';
import Country from '../Component/CountryVisit/Country';
import CountryThailand from '../Component/CountryVisit/CountryThailand';
import CountryMalaysia from '../Component/CountryVisit/CountryMalaysia';
import CountryVietnam from '../Component/CountryVisit/CountryVietnam';
import CountryCambodia from '../Component/CountryVisit/CountryCambodia';
import CountryIndonesia from '../Component/CountryVisit/CountryIndonesia';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/updateprofile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/TouristSpot',
                element: <TouristSpot></TouristSpot>,
                loader: () => fetch('http://localhost:5000/TouristSpot')
            },
            {
                path: '/TouristSpot/:id',
                element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/TouristSpot/${params.id}`)
            },
            {
                path: '/MyList/:email',
                element:<PrivateRoute><MyList></MyList></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/MyList/${params.email}`)
            },
            {
                path: '/TouristSpot/Bangladesh',
                element:<Country></Country>,
                loader:()=>fetch(`http://localhost:5000/allSpot/Bangladesh`)
            },
            {
                path: '/TouristSpot/Thailand',
                element:<CountryThailand></CountryThailand>,
                loader:()=>fetch(`http://localhost:5000/allSpot/Thailand`)
            },
            {
                path: '/TouristSpot/Indonesia',
                element:<CountryIndonesia></CountryIndonesia>,
                loader:()=>fetch(`http://localhost:5000/allSpot/Indonesia`)
            },
            {
                path: '/TouristSpot/Malaysia',
                element:<CountryMalaysia></CountryMalaysia>,
                loader:()=>fetch(`http://localhost:5000/allSpot/Malaysia`)
            },
            {
                path: '/TouristSpot/Vietnam',
                element:<CountryVietnam></CountryVietnam>,
                loader:()=>fetch(`http://localhost:5000/allSpot/Vietnam`)
            },
            {
                path: '/TouristSpot/Cambodia',
                element:<CountryCambodia></CountryCambodia>,
                loader:()=>fetch(`http://localhost:5000/allSpot/Cambodia`)
            },
            {
                path:'/updateSpot/:id',
                element:<PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/TouristSpot/${params.id}`)
            }
            
            

        ]
    },
]);

export default Router;