import RecommandationList from "./RecommandationList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    return(
        <div className="main_count">
            <RecommandationList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;