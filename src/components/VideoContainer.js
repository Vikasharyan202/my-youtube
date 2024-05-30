import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchVideo();
    }, []);

    const fetchVideo = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();

        setVideos(json.items);

        // console.log(json);
    }
    if(videos.length === 0) return;

    return(
        <div className="video_count">
            {videos.map((video) => <Link to={"/watch?v="+video.id} key={video.id} className="link"><VideoCard video={video}/></Link>) }
        </div>
    )
}

export default VideoContainer;