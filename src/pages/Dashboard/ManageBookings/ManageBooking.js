import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const ManageBooking = () => {
    const [allBooking, setAllBooking] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `http://localhost:5000/allbooking`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                allBooking.map(booking => <Grid item xs={2} sm={4} md={4} >
                    <Card sx={{ maxWidth: 345, maxHeight: 300 }}>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {booking?.apartmentName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {booking?.email} {booking?.phone}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">{booking?.status}</Button>
                            <Button size="small">Cancel</Button>
                        </CardActions>
                    </Card>
                </Grid>)
            }
        </Grid>
    );
};

export default ManageBooking;