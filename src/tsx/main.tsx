import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from './Contact';
import Home from "./Home";
import App from "./App";
import ErrorPage from "./ErrorPage";
import '../styles/App.scss'

// Import bootstrap


const router = createBrowserRouter([
    {
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
        ],
    },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
} else {
    console.error("Container element not found!");
}
