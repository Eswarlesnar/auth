
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../contexts/authContext';

function Navbar() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()
  const {loggedIn , setLoggedIn , handleLogout }  =  useContext(authContext)


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigateToDashboard = () => {
     setAnchorElUser(null)
     setTimeout(() => {
        navigate("/dashboard")
     }, 1000)
  }

  return ( 
  <>
  
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography onClick={ () => {navigate("/")}}
            variant="h6"
            noWrap
            component = "a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              flexGrow : 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor : "pointer"
            }}
          >
            LOGO
          </Typography>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx ={{width : "30px" , height : "30px"}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             <MenuItem onClick={handleNavigateToDashboard}>
                  <Typography textAlign="center">Dashboard</Typography>
             </MenuItem>
             {
                loggedIn ?  
                <MenuItem onClick={ () => {
                    handleLogout()
                    navigate("/")
                }}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>: 
                <MenuItem onClick={() => {
                    handleCloseUserMenu()
                    navigate("/login")
                }}>
                    <Typography textAlign="center">Login</Typography>
                </MenuItem>
                
             }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   
    </>
  );
}
export default Navbar;