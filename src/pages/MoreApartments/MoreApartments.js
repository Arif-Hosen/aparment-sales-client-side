import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const MoreApartments = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/moreApartments')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])
    return (
        <div style={{ fontFamily: 'playfair' }}>
            <Navigation></Navigation>
            <Container sx={{ mb: 5, mt: 11 }}>
                <Typography style={{ color: ' #005E9E' }} variant='h5' sx={{ mt: 5, textAlign: 'center', fontFamily: 'playfair' }}>OUR ALL APARTMENTS
                </Typography>
                <Typography variant='body1' sx={{ mb: 5, textAlign: 'center', fontFamily: 'playfair' }}>Find Latest Exclusive Properties
                </Typography>
                <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {
                        apartments.map(apartment => <Grid item xs={4} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={apartment?.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontWeight: '700' }} gutterBottom variant="h7" component="div">
                                        {apartment?.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h7" component="div">
                                        $  {apartment?.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {apartment?.des}
                                    </Typography>
                                </CardContent>
                                <Link to={`/placebooking/${apartment?._id}`}>
                                    <Button style={{ backgroundColor: '#005E9E' }} variant='contained' sx={{ width: '100%', fontWeight: 700 }}>BOOK NOW</Button>
                                </Link>

                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MoreApartments;