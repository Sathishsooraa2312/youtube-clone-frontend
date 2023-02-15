import React from 'react'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
function Header() {
  return (<>
     <Box className="header">
       <Box className="header-start">
          <MenuIcon />
          <Typography component="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube-logo" className="youtube-logo"/>
       </Box>
       <Box  className="header-middle">
          <input  className='header-input'  placeholder="search" type="text"/>
          <SearchIcon  className="input-icon"/>
       </Box>
        <Box className="header-end">
          <VideoCallIcon className='header-icon' />
          <AppsIcon className='header-icon'/>
          <NotificationsIcon className='header-icon' />
          <Avatar
  alt="Remy Sharp"
  className='header-icon'
  src="/static/images/avatar/1.jpg"
  sx={{ width: 24, height: 24 , }}
/>
        </Box>
     </Box>
   
  </>)
}

export default Header