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
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from './../Banner/Banner';

const Home = () => {




    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h1 style={{ color: '#005E9E' }}>THIS is HOMEN</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempora non illum praesentium accusantium eius magnam nisi, inventore molestias, et ad, provident doloribus? Rem dolorem, adipisci officiis provident neque porro!</p>
            <Typography style={{ color: '#005E9E', fontFamily: 'Playfair' }} variant='h1'>Hello</Typography>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>


        </div >
    );
};

export default Home;