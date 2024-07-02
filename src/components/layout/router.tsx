import {createBrowserRouter} from "react-router-dom";
import App from "../../App";
import ErrorPage from "../ErrorPage";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import Services from "../../pages/Services";

const router = createBrowserRouter([{
    element: <App/>, errorElement: <ErrorPage/>, children: [{
        path: "/", element: <Home/>,
    }, {
        path: "/contact", element: <Contact/>,
    }, {
        path: "/about", element: <About/>,
    }, {
        path: "/services", element: <Services/>,
    },],
},]);

export default router;