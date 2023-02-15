import React from 'react'
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

function Sidebar() {
  return (<>
  <Box className="sidebar">
     <Sidebarrow selected Icon={HomeIcon} title="Home" />
     <Sidebarrow Icon={WhatshotIcon} title="Trending" />
     <Sidebarrow Icon={SubscriptionsIcon} title="Subscription" />
     <hr />
     <Sidebarrow Icon={VideoLibraryIcon} title="Library" />
     <Sidebarrow Icon={ HistoryIcon} title="History" />
     <Sidebarrow Icon={OndemandVideoIcon} title="Your videos" />
     <Sidebarrow Icon={ WatchLaterIcon} title="Watch Later" />
     <Sidebarrow Icon={ThumbUpAltIcon} title="Liked Videos" />
     <Sidebarrow Icon={ExpandMoreIcon} title="Show More" />
     <hr />
    </Box>
    </>)
}
function Sidebarrow({selected,Icon,title}){
    return(<>
       <Box className={`Sidebarrow ${selected && "selected"}`}>
       <Icon className="sidebarrow-icon" />
       <h1 className="sidebarrow-title">{title}</h1>
       </Box>
    </>) 
}

export default Sidebar