import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './ShortDescription.css';
const ShortDescription = () => {
    return (
        <div className='shortDescription-container'>
            <div className='short-text'>
                <h2 style={{ fontWeight: '700', fontSize: '30px' }}>See how MY HOME can help</h2>
                <p style={{ fontSize: '15px' }}>OUR PROFESSIONAL TEAM CAN HELP YOU OUT. POST YOUR PROPERTY DETAILS NOW.</p>
                <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 6 }} sx={{ justifyContent: 'center' }}>
                    <Grid item xs={6} sm={6} md={6} lg={5} sx={{}}>
                        <Box className='short-card'>
                            <img width='50%' src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg" alt="" />
                            <Typography variant='h5'>Buy Home</Typography>
                            <Typography variant='body2'>Homes for sale available on the website, we can match you with a house you will want to call home.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={5} >
                        <Box className='short-card'>
                            <img width='50%' src="https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg" alt="" />
                            <Typography variant='h5'>Rent Home</Typography>
                            <Typography variant='body2'>Homes for rent available on the website, we can match you with a house you will want to call home.</Typography>
                        </Box>
                    </Grid>


                </Grid>
            </div>
        </div>
    );
};

export default ShortDescription;