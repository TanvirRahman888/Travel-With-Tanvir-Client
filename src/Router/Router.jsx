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
import ErrorPage from '../Component/ErrorPage/ErrorPage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
                loader: () => fetch('https://travel-with-tanvir-server.vercel.app/TouristSpot')
            },
            {
                path: '/TouristSpot/:id',
                element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-with-tanvir-server.vercel.app/TouristSpot/${params.id}`)
            },
            {
                path: '/MyList/:email',
                element:<PrivateRoute><MyList></MyList></PrivateRoute>,
                loader:({params})=>fetch(`https://travel-with-tanvir-server.vercel.app/MyList/${params.email}`)
            },
            {
                path: '/TouristSpot/Bangladesh',
                element:<Country></Country>,
                loader:()=>fetch(`https://travel-with-tanvir-server.vercel.app/allSpot/Bangladesh`)
            },
            {
                path: '/TouristSpot/Thailand',
                element:<CountryThailand></CountryThailand>,
                loader:()=>fetch(`https://travel-with-tanvir-server.vercel.app/allSpot/Thailand`)
            },
            {
                path: '/TouristSpot/Indonesia',
                element:<CountryIndonesia></CountryIndonesia>,
                loader:()=>fetch(`https://travel-with-tanvir-server.vercel.app/allSpot/Indonesia`)
            },
            {
                path: '/TouristSpot/Malaysia',
                element:<CountryMalaysia></CountryMalaysia>,
                loader:()=>fetch(`https://travel-with-tanvir-server.vercel.app/allSpot/Malaysia`)
            },
            {
                path: '/TouristSpot/Vietnam',
                element:<CountryVietnam></CountryVietnam>,
                loader:()=>fetch(`https://travel-with-tanvir-server.vercel.app/allSpot/Vietnam`)
            },
            {
                path: '/TouristSpot/Cambodia',
                element:<CountryCambodia></CountryCambodia>,
                loader:()=>fetch(`https://travel-with-tanvir-server.vercel.app/allSpot/Cambodia`)
            },
            {
                path:'/updateSpot/:id',
                element:<PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
                loader:({params})=>fetch(`https://travel-with-tanvir-server.vercel.app/TouristSpot/${params.id}`)
            }
            
            

        ]
    },
]);

export default Router;