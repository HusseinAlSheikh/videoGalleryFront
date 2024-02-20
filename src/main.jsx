import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import router from '../src/router/router.jsx';
import { AuthContextProvider } from '../src/store/auth_context.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider> ,
)
