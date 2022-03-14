import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';

const Login = () => {
    const { loginUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();

    // get data form field
    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        loginUser(email, password, location, history);
    }

    return (
        <div >
            <Navigation></Navigation>
            <Box className='login' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 10 }}>
                <div className='login-form'>
                    <form onSubmit={handleOnSubmit}>
                        <h2 style={{ color: "#005E9E", fontWeight: 700 }}>Login</h2>
                        <TextField sx={{ width: 1, mt: 2 }}
                            onBlur={handleEmail}
                            id="outlined-basic"
                            type="email"
                            label="Email"
                            variant="outlined" />
                        <br />
                        <TextField sx={{ width: 1, mt: 3 }}
                            onBlur={handlePassword}
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined" />
                        <br />
                        <Button type='submit' style={{ backgroundColor: '#005E9E', fontWeight: 700 }} sx={{ width: 1, mt: 3 }} variant="contained">Login</Button>
                    </form>

                    <p>New User? Please <Link to='/register' style={{ textDecoration: 'none', color: '#005E9E', fontWeight: '700' }} >Register</Link></p>
                </div>
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default Login;