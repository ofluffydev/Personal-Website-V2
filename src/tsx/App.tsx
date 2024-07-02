import Header from './Header';
import {Outlet} from "react-router-dom";

export default function App() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}