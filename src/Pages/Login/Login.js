import { Button, Grid, Typography, Container } from '@mui/material';
import React from 'react';
import { useHistory, useLocation } from 'react-router';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Login = () => {


    return (
        <div>
            <Container>

                <Grid container spacing={2}  >
                    <Grid item sx={{ mt: 8, mb: 10 }} xs={12} md={6}>
                        <Typography sx={{ textAlign: 'center' }} variant="body1" gutterBottom><h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{ fontSize: "30px", fontFamily: 'cursive' }}>Login Please </span></h3></Typography>
                        <p className="text-center text-danger mt-5 "><hr /></p>
                        <Box sx={{ textAlign: 'center' }}>
                            <form>
                                <TextField

                                    type="email"
                                    sx={{ width: '75%', m: 1 }}
                                    id="outlined-basic"
                                    label="Enter Email"
                                    variant="outlined" />

                                <TextField
                                    required

                                    type="password"
                                    sx={{ width: '75%', m: 1 }}
                                    id="outlined-basic"
                                    label="Enter Password"
                                    variant="outlined" />

                                <p className="text-danger"></p>

                                <Button style={{ backgroundColor: "	salmon" }} type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Login</Button>
                            </form>

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button style={{ color: "black" }}> <span className='text-danger px-2'>New User?</span> Please Register</Button>
                            </NavLink>
                            <p>------------------------</p>
                            <Button style={{ backgroundColor: "	salmon", color: "white", fontWeight: "bold", paddingLeft: "10px", paddingRight: "10px", }}>Google Sign In</Button>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://image.freepik.com/free-vector/online-wishes-list-concept-illustration_114360-3900.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;