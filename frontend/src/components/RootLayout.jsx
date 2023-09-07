import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Login', 'Signup', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const RootLayout = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleHome = () =>{
    navigate('/');
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button variant="outlined" color="inherit" sx={{marginRight:2}} onClick={handleHome}>
              Home
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              EMS
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ marginRight: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button color="inherit" variant="outlined" onClick={handleSignup}>
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
