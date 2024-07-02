import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Home from "./Home.tsx";
import Contact from "./Contact.tsx";

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

export default router;