import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
    return (
        <div className="bg-white w-full h-full z-0">
            <Navbar />
			<Outlet />
		</div>
    )
}