import { Grid, Typography } from '@mui/material';

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Grid container columnSpacing={{ xs: 1, sm: 3, md: 3, lg: 8 }} sx={{ pt: 5, pl: 5 }}>
                <Grid item xs={12} sm={6} md={6} lg={3} sx={{}}>
                    <Typography sx={{ borderBottom: 1 }} claaName='footer-heading' variant='h5'>ABOUT MY HOME</Typography>
                    <p className='footer-link'>MY HOME is an independent team within Building technology & ideas ltd. (bti) and acts as a networking platform for its large database of clientele consisting of interested buyers and sellers. It is a one-stop solution for all your real estate needs, be it buying, selling and renting properties.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} sx={{ pl: 3 }}>
                    <Typography sx={{ borderBottom: 1 }} claaName='footer-heading' variant='h5'>Apartment Sale</Typography>
                    <a className='footer-link' href=""><p>For Sale in Mirpur</p></a>
                    <a className='footer-link' href=""><p>For Sale in Gulshan</p></a>
                    <a className='footer-link' href=""><p>For Sale in Malibagh</p></a>
                    <a className='footer-link' href=""><p>For Sale in Uttara</p></a>
                    <a className='footer-link' href=""><p>For Sale in Rampura</p></a>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Typography sx={{ borderBottom: 1 }} claaName='footer-heading' variant='h5'>Apartment Rent</Typography>
                    <a className='footer-link' href=""><p>For Rent in Mirpur</p></a>
                    <a className='footer-link' href=""><p>For Rent in Gulshan</p></a>
                    <a className='footer-link' href=""><p>For Rent in Malibagh</p></a>
                    <a className='footer-link' href=""><p>For Rent in Uttara</p></a>
                    <a className='footer-link' href=""><p>For Rent in Rampura</p></a>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Typography sx={{ borderBottom: 1 }} claaName='footer-heading' variant='h5'>Contact Us</Typography>
                    <a className='footer-link' href=""><p>Address: Gulshan, Dhaka-1232, Bangladesh</p></a>
                    <a className='footer-link' href=""><p>Email: myhome@home.com</p></a>
                    <a className='footer-link' href=""><p>Phone: +8801321212121</p></a>

                </Grid>

            </Grid>
        </div>
    );
};

export default Footer;