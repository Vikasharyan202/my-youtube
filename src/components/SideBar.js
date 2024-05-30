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
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);


    if(!isSidebarOpen) {
        return null;
        // return(
        //     <div className="sidebar_count closed">
        //         <ul>
        //             <li><Link to="/" className='sidebarItemAlign'><HomeIcon /><span>Home</span></Link></li>
        //             <li><Link to="/" className='sidebarItemAlign'><SlowMotionVideoIcon />Shorts</Link></li>
        //             <li><Link to="/" className='sidebarItemAlign'><SubscriptionsIcon />Subscribers</Link></li>
        //             <li><Link to="/" className='sidebarItemAlign'><OndemandVideoIcon />You</Link></li>
        //         </ul>
        //     </div>
        // )
    };
    return(
        <div className="sidebar_count">
            <ul>
                <li><Link to="/" className='sidebarItemAlign'><HomeIcon />Home</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><SlowMotionVideoIcon />Shorts</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><SubscriptionsIcon />Subscribers</Link></li>
            </ul>
            <h4>You</h4>
            <ul>
                <li><Link to="/" className='sidebarItemAlign'><AccountBoxIcon />Your channel</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><HistoryIcon />History</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><PlaylistPlayIcon />Playlists</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><PlayCircleIcon />Your videos</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><WatchLaterIcon />Watch later</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><ThumbUpOffAltIcon />Liked videos</Link></li>
            </ul>
            <h4>Subscriptions</h4>
            <ul>
                <li><Link to="/" className='sidebarItemAlign'><AccountCircleIcon />vikash</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><AccountCircleIcon />alok</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><AccountCircleIcon />nitu</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><AccountCircleIcon />Baby</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><AccountCircleIcon />asha</Link></li>
                <li><Link to="/" className='sidebarItemAlign'><AccountCircleIcon />bijay</Link></li>
                </ul>
        </div>
    )
}
export default SideBar;