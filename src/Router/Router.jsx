import { createBrowserRouter } from 'react-router-dom';
import Root from '../Component/Root/Root';
import Login from '../Component/Login/Login';
import Register from '../Component/Login/Register/Register';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default Router;