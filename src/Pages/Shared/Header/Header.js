import React from 'react';
import './Header.css'
import { Navbar, Button, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';


const Header = () => {

    // const { user, logout } = useAuth();

    return (

        <div>

            <Navbar collapseOnSelect expand="sm" style={{ backgroundColor: 'pink' }} variant="light" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavLink to="/" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "3px" }} >
                        <span className=" lipstick-collection fw-bold text-danger">Lipstick Collection</span>
                        <img style={{ height: "30px" }} src='https://t4.ftcdn.net/jpg/03/16/15/05/240_F_316150591_V75Nnx6euwidlHGdgmYTfLYf36Q1wSqH.jpg' alt="" />
                    </NavLink>

                    {/* NavLink for Route */}

                    <Navbar.Collapse id="responsive-navbar-nav" className="me-auto nav-iteam justify-content-end">
                        <NavLink to="/home" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "red" }}>Home</NavLink>

                        <NavLink to="/exploremore" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "red" }}>Explore More</NavLink>

                        <Button to="/login" variant="dark" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", paddingTop: "3px", paddingBottom: "6px", paddingLeft: "10px", paddingRight: "10px", color: "white" }} >Login <i className="fas fa-sign-out-alt"></i></Button>


                        {/* <NavLink to="/exploremore" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "red" }}  >Explore More</NavLink> */}


                        {/* {user.email && <NavLink to="/dashboard" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "red" }} >Dashboard </NavLink>} */}



                        {/* {!user?.email ? <Link to="/login"> <Button style={{ color: "white" }} variant="success">Login<i className="fas fa-sign-in-alt"></i></Button></Link>
                            :
                            <Button onClick={logout} style={{ color: "red" }} variant="danger">Logout-{user.displayName} <i className="fas fa-sign-out-alt"></i></Button>} */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
};

export default Header;