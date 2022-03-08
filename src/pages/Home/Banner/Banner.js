import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>

            <div className='banner-text'>
                <Typography variant='h3' style={{ color: 'ghostwhite', fontFamily: 'Playfair' }}>Discover a place
                    you'll love to live</Typography>

                <Typography variant='h5' style={{ color: 'ghostwhite', fontFamily: 'Playfair' }}>Let’s find a home that’s perfect for you</Typography>
                <div style={{ textAlign: 'center', marginTop: '20px' }} className='banner-link'>
                    <a href="">Buy</a>
                    <a href="">Rent</a>
                    <a href="">Sales</a>
                </div>
                <div style={{ backgroundColor: '#5c5c5ca9', padding: '10px', borderRadius: '5px' }}>
                    <input style={{ height: '35px', width: '80%', backgroundColor: 'white', borderRadius: '5px' }} type="text" />
                    <Button variant="contained">Contained</Button>
                </div>
            </div>

        </div>
    );
};

export default Banner;