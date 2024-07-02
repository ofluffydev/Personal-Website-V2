import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import '../src/styles/App.scss'
import router from "./components/layout/router";
import {StrictMode} from "react";
import Fallback from "./components/Fallback";
import {renderToString} from "react-dom/server";

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>);
} else {
    console.error("Container element not found!");
    document.body.innerHTML = renderToString(<Fallback/>);
}