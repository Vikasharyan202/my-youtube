
const VideoCard = ({video}) => {
    // console.log(video);

    const {snippet, statistics} = video;
    const {channelTitle, title, thumbnails} = snippet;

    let totalViews = Math.floor((statistics.viewCount/1000));
    return(
        <div className="videocard_count">
            <img src={thumbnails.high.url} />
            
            <ul>
                <li className="title">{title.slice(0, 25) + '...'}</li>
                <li>{channelTitle.slice(0, 15)}</li>
                <li>{totalViews < 1000 ? totalViews + "k views": (totalViews/1000).toFixed(1) + "M views"} </li>
            </ul>
        </div>
    )
}
export default VideoCard;