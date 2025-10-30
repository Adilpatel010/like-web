import { Outlet } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Catalog from "../pages/home/Catalog";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-30">
                <Outlet />
            </main>
            <Catalog />
            <Footer />
        </div>
    );
};

export default Layout;
