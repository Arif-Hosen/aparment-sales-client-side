import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import './ManageBooking.css';

const ManageBooking = () => {
    const [allBooking, setAllBooking] = useState([]);
    const [apartments,setApartments]=useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `http://localhost:5000/allbooking`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])

    // load apartment data from db
    useEffect(()=>{
        fetch('http://localhost:5000/apartments')
        .then(res=>res.json())
        .then(data=>setApartments(data))
    },[])

    
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                allBooking.map(booking => <Grid item xs={2} sm={4} md={4} >
                    <Card className='custom-card' sx={{ maxWidth: 345, maxHeight: 300 }}>

                        <CardContent>
                                <Typography className='apartment-name' gutterBottom variant="body1" component="div">
                                {booking?.apartmentName}
                            </Typography>
                            
                            <Typography variant='body2'>Order ID: {booking?._id}</Typography>
<Typography variant='body'>Customer Info</Typography>
                            <Typography variant="body2" color="text.secondary">
                               Email: {booking?.email}
                            </Typography>
                           
                            <Typography variant="body2" color="text.secondary">
                               Phone: {booking?.phone}
                            </Typography>
                           
                        </CardContent>
                        <CardActions>
                            <Button className='pending-button' size="small">{booking?.status}</Button>
                            <Button className='custom-button' size="small">Cancel</Button>
                        </CardActions>
                    </Card>
                </Grid>)
            }
        </Grid>
    );
};

export default ManageBooking;