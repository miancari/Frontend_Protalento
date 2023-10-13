import React from "react";
import ReactDom from 'react-dom/client';
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Gastos from "./views/Gastos";
import Ingresos from "./views/Ingresos";
import Usuarios from "./views/Ususarios";
import Login from "./views/Login";

const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "gastos/",
            element: <Gastos></Gastos>,
          },
          {
            path: "ingresos/",
            element: <Ingresos></Ingresos>,
          },
          {
            path: "usuarios/",
            element: <Usuarios></Usuarios>,
          },
        ]
    },
]);

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
)