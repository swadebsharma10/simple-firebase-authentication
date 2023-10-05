import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Main from './Layout/Main';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
