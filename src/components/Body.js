
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return(
        <div className="body_count">
            <SideBar />
            <Outlet />
        </div>
    )
}

export default Body;