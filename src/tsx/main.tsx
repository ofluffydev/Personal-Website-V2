import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import '../styles/App.scss'
import router from "./router.tsx";
import {StrictMode} from "react";
import Fallback from "./Fallback.tsx";
import {renderToString} from "react-dom/server";

const rootElement = document.getElementById('roovt');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>);
} else {
    console.error("Container element not found!");
    document.body.innerHTML = renderToString(<Fallback/>);
}
