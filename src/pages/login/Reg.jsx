import { Grid, Typography, TextField, Box, Container, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Reg = () => {


    return (
        <div>

            <Container>
                <Grid container spacing={2}  >
                    <Grid item sx={{ mt: 5, mb: 10 }} xs={12} md={6}>
                        <Typography sx={{ textAlign: 'center' }} variant="body1" gutterBottom><h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{ fontSize: "30px", fontFamily: 'cursive' }}>Registration Please </span></h3></Typography>
                        <p className="text-center text-danger mt-5 "><hr /></p>
                        <Box sx={{ textAlign: 'center' }}>
                            <form>
                                <TextField
                                    required
                                    type="text"
                                    sx={{ width: '75%', m: 1 }}
                                    id="outlined-basic"
                                    label="Enter Name"
                                    variant="outlined" />
                                <TextField
                                    required
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

                                <Button style={{ backgroundColor: "	salmon" }} type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                            </form>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button style={{ color: "black" }}> <span className='text-danger px-2'>Already Register?</span> Please Login</Button>
                            </NavLink>
                            <p>------------------------</p>
                            <Button style={{ backgroundColor: "	salmon", color: "white", fontWeight: "bold", paddingLeft: "10px", paddingRight: "10px" }} variant="contained">Google Sign In</Button>

                        </Box>


                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://image.freepik.com/free-vector/no-time-concept-illustration_114360-4209.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default Reg;