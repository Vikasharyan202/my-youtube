import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);

    if(!isSidebarOpen) {
        return(
            <div className="sidebar_count closed">
                <ul>
                    <li><HomeIcon /><span>Home</span></li>
                    <li><SlowMotionVideoIcon /><span>Shorts</span></li>
                    <li><SubscriptionsIcon /><span>Subscribers</span></li>
                    <li><OndemandVideoIcon /><span>You</span></li>
                </ul>
            </div>
        )
    };
    return(
        <div className="sidebar_count">
            <ul>
                <li><HomeIcon /><span>Home</span></li>
                <li><SlowMotionVideoIcon /><span>Shorts</span></li>
                <li><SubscriptionsIcon /><span>Subscribers</span></li>
            </ul>
            <h4>You</h4>
            <ul>
                <li><AccountBoxIcon /><span>Your channel</span></li>
                <li><HistoryIcon /><span>History</span></li>
                <li><PlaylistPlayIcon /><span>Playlists</span></li>
                <li><PlayCircleIcon /><span>Your videos</span></li>
                <li><WatchLaterIcon /><span>Watch later</span></li>
                <li><ThumbUpOffAltIcon /><span>Liked videos</span></li>
            </ul>
            <h4>Subscriptions</h4>
            <ul>
                <li><AccountCircleIcon /><span>vikash</span></li>
                <li><AccountCircleIcon /><span>alok</span></li>
                <li><AccountCircleIcon /><span>nitu</span></li>
                <li><AccountCircleIcon /><span>Baby</span></li>
                <li><AccountCircleIcon /><span>asha</span></li>
                <li><AccountCircleIcon /><span>bijay</span></li>
                </ul>
        </div>
    )
}
export default SideBar;