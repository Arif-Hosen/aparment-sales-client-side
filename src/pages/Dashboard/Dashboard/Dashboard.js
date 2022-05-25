import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import './Dashboard.css'

import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import ManageBooking from '../ManageBookings/ManageBooking';
import AddApartment from '../AddApartment/AddApartment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageApartment from '../ManageApartment/ManageApartment';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { user, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // useRouteMatch react router hook contains the path (which is set in Route) and url (set in Link)
    const { path, url } = useRouteMatch();
    // console.log('path', path, 'url', url);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {
                !admin && <List className='list'>
                    <ListItem button key={'text'}>

                        <Link className='list-item' to={`${path}/mybooking`}>
                            <ListItemText sx={{ fontWeight: '700' }}>MY HOME</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button key={'text'}>

                        <Link className='list-item' to={`${path}/mybooking`}>
                            <ListItemText ><i class="fa fa-address-book"></i> My Order</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'}>

                        <Link className='list-item' to={`${path}/payment`}>
                            <ListItemText ><i class="fa   fa-file-invoice-dollar"></i> Payment</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'}>
                        <Link className='list-item' to={`${path}/review`}>
                            <ListItemText >Review</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'} >


                        <ListItemText className='list-item'>Log out</ListItemText>

                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'} className='goHome'>
                        <Link className='list-item ' to='/home'>
                            <ListItemText >Go to Home</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            }
            {
                admin && <List className='list'>
                    <ListItem button key={'text'}>
                        <Link className='list-item' to={`${path}/managebooking`}>
                            <ListItemText >Manage Booking</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'}>
                        <Link className='list-item' to={`${path}/addapartment`}>
                            <ListItemText >Add Apartment</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'}>
                        <Link className='list-item' to={`${path}/manageapartment`}>
                            <ListItemText >Manage Apartment</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'}>
                        <Link className='list-item' to={`${path}/makeadmin`}>
                            <ListItemText >Make Admin</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'}>


                        <ListItemText className='list-item'>Log out</ListItemText>

                    </ListItem>
                    <Divider />
                    <ListItem button key={'text'}>
                        <Link className='list-item' to='/home'>
                            <ListItemText >Go to Home</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />

                </List>
            }

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: '#005E9E  ' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user?.displayName} Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Switch>
                    <Route path='/home'>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/mybooking`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/managebooking`}>
                        <ManageBooking></ManageBooking>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addapartment`}>
                        <AddApartment></AddApartment>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageapartment`}>
                        <ManageApartment></ManageApartment>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box >
        </Box >
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;