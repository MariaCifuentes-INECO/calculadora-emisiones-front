import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layoutStyle.css";

export const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <main className="main-content mb-5">
                <Outlet/> {/* Renderiza las rutas anidadas aquí */}
            </main>
            <Footer />
        </div>
    );
};