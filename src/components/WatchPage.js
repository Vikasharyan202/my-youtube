import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar());
    }, []);

    return(
        <div className="watchpage_count">
            <iframe
             width="560" height="315" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>               
             </iframe>
        </div>
    )
}

export default WatchPage;