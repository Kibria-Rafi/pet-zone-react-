import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Contact from './Contact';
import Favorite from './Favorite';
import Login from './Login';
import Register from './Register';
import Errorpage from './Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('products.json')
      },
      {
        path:"contact",
        element: <Contact></Contact>
      },
      {
        path:"/favorite",
        element:<Favorite></Favorite>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
