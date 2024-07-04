import {createBrowserRouter} from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import ErrorPage from "../../fluffy-pack/components/ErrorPage.tsx";
import Contact from "@/fluffy-pack/components/Contact.tsx";

const router = createBrowserRouter([{
    element: <App/>, errorElement: <ErrorPage/>, children: [{
        path: "/", element: <Home/>,
    }, {
        path: "/contact", element: <Contact email={'support@kadenfrisk.com'} x={'KadenFrisk'} discordUser={'ofluffy'} phone={'(806) 443-0175'} includeForm={true} github={'ofluffydev'}/>,
    }, {
        path: "/about", element: <About/>,
    }, {
        path: "/services", element: <Services/>,
    },],
},]);

export default router;