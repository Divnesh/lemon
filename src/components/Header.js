import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../images/logo.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const pages = [
    {
        name: 'Home',
        link: "/"
    },
    {
        name: 'Menu',
        link: "/menu"
    },
    {
        name: 'Reservations',
        link: "/reservations"
    },
    {
        name: 'Order Online',
        link: "/order"
    },
    {
        name: 'Contact Us',
        link: "/contact"
    },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav>
        <AppBar position="static" sx={{background: 'white'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Box component="img"
                    sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    alt="Logo"
                    src={Logo}
                    height={45}></Box>

                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="black"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <Link to={page.link}>
                            <MenuItem key={page.name}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        </Link>
                    ))}
                    </Menu>
                </Box>

                <Box component="img"
                    sx={{ display: { xs: 'flex', md: 'none'  }, m: 'auto' }}
                    alt="Logo"
                    src={Logo}
                    height={45}></Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end'}}>
                    {pages.map((page) => (
                        <Link to={page.link}>
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Cart">
                        <Button sx={{color: '#495E57'}}>
                            <ShoppingBasketIcon></ShoppingBasketIcon>
                        </Button>
                    </Tooltip>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </nav>
  );
}
export default Header;