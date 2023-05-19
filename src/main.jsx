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
import ViewToyDetails from './components/ViewToyDetails/ViewToyDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyToys from './components/MyToys/MyToys';
import AuthProvider from './provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
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
      },
      {
        path: "viewdetails/:id",
        element: <ViewToyDetails></ViewToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/singletoy/${params.id}`)
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
