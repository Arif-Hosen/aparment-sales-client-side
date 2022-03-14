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
import Footer from '../../Shared/Footer/Footer';
import ShortDescription from '../ShortDescription/ShortDescription';
import Apparments from '../Appartment/Apparments';

const Home = () => {




    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Apparments></Apparments>
            <ShortDescription></ShortDescription>
            <Footer></Footer>


        </div >
    );
};

export default Home;