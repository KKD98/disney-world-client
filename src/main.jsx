import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import HomeBody from './components/HomeBody/HomeBody';
import AllToys from './components/AllToys/AllToys';
import AddAToy from './components/AddAToy/AddAToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children:[
      {
        path: "/",
        element: <HomeBody></HomeBody>
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "addatoy",
        element: <AddAToy></AddAToy>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
