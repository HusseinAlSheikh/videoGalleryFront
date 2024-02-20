import {Navigate, createBrowserRouter} from 'react-router-dom';

import DefaultLayout from '../layout/DefaultLayout';
import DashboardLayout from '../layout/DashboardLayout';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
    {
        path:'/' , 
        element:<DashboardLayout />,
        children:[
            {
                path:'/admin',
                element:<Navigate to="/dashboard"/>
            },
            {
                path:'/admin/users',
                element:<Users/>
            },
            {
                path:'/admin/dashboard',
                element:<Dashboard />
            }
        ]
    },
    {
        path:'/' , 
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            }
        ]
    },

    {
        path:'*',
        element:<NotFound/>
    },
]);


export default router;