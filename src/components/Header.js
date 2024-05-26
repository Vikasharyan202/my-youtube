import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/sidebarSlice';

const Header = () => {

    const dispatch = useDispatch();


    function toggleMenuHandler() {
        dispatch(toggleSidebar());
    }
    return(
        <div className="header_count">
            <div className="logo_count">
                <MenuIcon onClick={() => toggleMenuHandler()}/>
                <img className="logo" src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg" />
            </div>
            <div className="search_count">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="profile_count">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Unicode_0x0056.svg/1200px-Unicode_0x0056.svg.png" />
            </div>
        </div>
    )
}
export default Header;