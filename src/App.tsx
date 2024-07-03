import {Outlet} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
    return (<div className="app">
        <Header/>
        <main className="main-content">
            <Outlet/>
        </main>
        <Footer/>
    </div>)
}