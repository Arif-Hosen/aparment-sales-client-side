import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css'
import useAuth from './../../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { registerUser } = useAuth();

    const history = useHistory();

    // get data form field
    const handleName = e => {
        const name = e.target.value;
        setName(name);
    }
    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleRegister = e => {
        e.preventDefault();

        registerUser(email, password, name, history);

    }

    return (
        <div>
            <Navigation></Navigation>
            <Box className='login' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 10 }}>
                <div className='register-form'>
                    <form onSubmit={handleRegister}>
                        <h2 style={{ color: "#005E9E", fontWeight: 700 }}>Sign Up</h2>
                        <TextField sx={{ width: 1, mt: 2 }} id="outlined-basic"
                            onBlur={handleName}
                            type="text"
                            label="Name"
                            variant="outlined" />
                        <br />
                        <TextField sx={{ width: 1, mt: 2 }} id="outlined-basic"
                            onBlur={handleEmail}
                            type="email"
                            label="Email"
                            variant="outlined" />
                        <br />
                        <TextField sx={{ width: 1, mt: 3 }} id="outlined-basic"
                            onBlur={handlePassword}
                            type="password"
                            label="Password"
                            variant="outlined" />
                        <br />
                        <Button

                            type='submit' style={{ backgroundColor: '#005E9E', fontWeight: 700 }} sx={{ width: 1, mt: 3 }} variant="contained">Sign Up</Button>
                    </form>

                    <p>Already Sign Up? Please <Link to='/login' style={{ textDecoration: 'none', color: '#005E9E', fontWeight: '700' }} >Login</Link></p>


                </div>
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default Register;