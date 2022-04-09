import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const pages = ['HOME', 'APARTMENTS', 'DASHBOARD'];
    const settings = [user.email, 'Account', 'Dashboard', 'Logout'];
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
        <div style={{ position: "stickyTop" }}>
            <AppBar style={{
                backgroundColor: '#005E9E'
            }} >
                <Container maxWidth="xl">
                    < Toolbar disableGutters>

                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            <img className='project-logo' alt="" src="https://st.depositphotos.com/2808409/3926/v/380/depositphotos_39264255-stock-illustration-flat-house-icon-background.jpg?forcejpeg=true" />
                        </Link>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            <Typography
                                style={{ fontFamily: 'playfair' }}
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            > MY HOME</Typography></Link>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Link to={`/${page}`} style={{ textDecoration: 'none', color: '#005E9E' }}><Typography
                                            style={{ fontFamily: 'playfair' }}
                                            textAlign="center">{page}</Typography>
                                        </Link>

                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>


                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}> MY HOME</Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


                            {pages.map((page) => (
                                <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'white' }}><Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'playfair' }}
                                >
                                    {page}
                                </Button></Link>
                            ))}


                        </Box>

                        <Box sx={{ flexGrow: 0 }}>

                            {!user?.email ? <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login </Link>
                                :
                                <> <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="" />


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

                                        <MenuItem key={user.email} onClick={handleCloseUserMenu}>
                                            <Typography style={{ color: '#005E9E', fontWeight: '700', fontFamily: 'playfair' }} textAlign="center"> {user.displayName}</Typography>

                                        </MenuItem>
                                        <MenuItem key={user.email} onClick={handleCloseUserMenu} >
                                            <Link to='/dashboard' style={{ color: '#005E9E', textDecoration: 'none' }}>
                                                <Typography sx={{ fontWeight: 700, fontFamily: 'playfair' }} textAlign="center">Dashboard</Typography>
                                            </Link>


                                        </MenuItem>
                                        <MenuItem key={user.email} onClick={handleCloseUserMenu} >
                                            <Typography style={{ color: '#005E9E', fontWeight: '700', fontFamily: 'playfair' }}
                                                onClick={() => logOut()}
                                                textAlign="center">Log Out</Typography>


                                        </MenuItem>
                                    </Menu>
                                </>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </div>
    );
};

export default Navigation;