import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar());
    }, []);

    return(
        <div className="watchpage_count">
            <div className="watchpage">
                <iframe
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>               
                </iframe>
            </div>
            <div className="liveChat_count">
                <LiveChat />
            </div>
        </div>
        
    )
}

export default WatchPage;