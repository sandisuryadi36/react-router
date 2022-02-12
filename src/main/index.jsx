import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar";

export default function Main() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}