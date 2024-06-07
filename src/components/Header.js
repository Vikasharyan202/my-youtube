import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../utils/sidebarSlice';
import { AUTO_SUGGTN_API } from '../utils/constants';
import { useEffect, useState } from 'react';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggesation, setSuggesation] = useState([]);
    const [showSuggesation, setShowsuggesation] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
  
    useEffect(() => {
        console.log(searchQuery);
        
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggesation(searchCache[searchQuery])    //cache search
            } else{
                getSearchSuggestion();  // Api call
            }         
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestion = async () => {
        const data = await fetch(AUTO_SUGGTN_API+searchQuery);
        const json = await data.json();
        setSuggesation(json[1]);
        console.log(json[1]);
        
        // update cache
        dispatch(
            cacheResults({
                [searchQuery] : json[1],
            })
        )
    }
    
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
                <div className='search'>
                    <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => (setSearchQuery(e.target.value))}
                    onFocus={() => setShowsuggesation(true)}
                    onBlur={() => setShowsuggesation(false)}
                    />
                    <button>Search</button>
                </div>             
                {showSuggesation && <div className="sugges_count">
                    {suggesation.map((sug) => <p key={sug}><span>🔍</span>{sug}</p>)}
                </div>}
            </div>
            <div className="profile_count">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Unicode_0x0056.svg/1200px-Unicode_0x0056.svg.png" />
            </div>
        </div>
    )
}
export default Header;