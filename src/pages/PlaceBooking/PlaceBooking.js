import { Alert, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Button from '@mui/material/Button';
import useAuth from '../../Hooks/useAuth';

const PlaceBooking = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [apartment, setApartment] = useState();
    const [success, setSuccess] = useState(false);

    const initialInfo = { name: user?.displayName, email: user?.email, phone: '', address: '' };

    const [userInfo, setUserInfo] = useState(initialInfo);

    // event Handler
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...userInfo };
        newInfo[field] = value;
        setUserInfo(newInfo);

    }

    // get specific apartment by id
    useEffect(() => {
        fetch(`http://localhost:5000/apartments/${id}`)
            .then(res => res.json())
            .then(data => setApartment(data))
    }, [])


    // form submit
    const handleOnSubmit = e => {
        e.preventDefault();

        // copy userInfo data and add another info
        const booking = {
            ...userInfo,
            apartmentName: apartment?.name, apartmentId: apartment?._id, status: 'pending'
        }
        // post booking data to booking db
        fetch('http://localhost:5000/placebooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data?.insertedId){
setSuccess(true);
                }
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <div style={{
                backgroundColor: '#abb8c31a', margin: '100px 40px', padding: '30px 40px', borderRadius: '5px',
                border: '1px solid lightgray'
            }}>
                <Typography style={{ color: ' #005E9E' }} variant='h5' sx={{ mt: 3, textAlign: 'center', fontFamily: 'playfair' }}>Please Provide your Info and place the Booking
                </Typography>
                <Typography style={{ color: ' ' }} variant='h6' sx={{ mb: 5, textAlign: 'center', fontFamily: 'playfair' }}>{apartment?.name}
                </Typography>
                <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={4} sm={4} md={6} >
                        <Card sx={{ maxWidth: 650 }}>
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
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6} lg={6} >
                        <Card sx={{ maxWidth: 800, px: 5 }}>
                            <form onSubmit={handleOnSubmit}>
                                <TextField
                                    disabled
                                    name='name'
                                    value={user?.displayName}
                                    sx={{ width: '100%', mt: 5 }}
                                    id="outlined-basic" label="Name" variant="outlined" />
                                <TextField
                                    disabled
                                    name='email'
                                    value={user?.email}
                                    sx={{ width: '100%', mt: 3 }}
                                    id="outlined-basic" label="Email" variant="outlined" />
                                <TextField
                                    onBlur={handleOnBlur}
                                    name='phone'
                                    sx={{ width: '100%', mt: 3 }}
                                    id="outlined-basic" label="Phone" variant="outlined" />
                                <TextField
                                    onBlur={handleOnBlur}
                                    name='address'
                                    sx={{ width: '100%', mt: 3 }}
                                    id="outlined-basic" label="Address" variant="outlined" />

                                <Button
                                    type='submit'
                                    style={{ backgroundColor: '#005E9E' }} variant='contained' sx={{ width: '100%', fontWeight: 700, my: 3 }}>Place Booking</Button>

                            </form>
{
    // after place booking , show success
    success &&<Alert severity="success">Your booking successfully placed!</Alert>

}
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceBooking;