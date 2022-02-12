import { Outlet } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

export default function Main() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}