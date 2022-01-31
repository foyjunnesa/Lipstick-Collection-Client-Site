import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container className="mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4 text-dark">
                        <img style={{ width: '70px' }} src="https://t4.ftcdn.net/jpg/03/16/15/05/240_F_316150591_V75Nnx6euwidlHGdgmYTfLYf36Q1wSqH.jpg" alt="" />
                        <h4 style={{ fontFamily: 'cursive' }} className="text-align-justify text-danger pt-3 fw-bold">Lipstick Collection</h4>
                        <p><i style={{ color: "rgb(29, 155, 240)", paddingRight: "20px", paddingTop: "20px", fontSize: "20px" }} className="fab fa-twitter"></i> <i style={{ paddingRight: "20px", paddingTop: "20px", fontSize: "20px" }} className="fab fa-google-plus-g"></i> <i style={{ color: "#1877f2", paddingRight: "20px", paddingTop: "20px", fontSize: "20px" }} className="fab fa-facebook-square"></i> <i style={{ paddingRight: "20px", paddingTop: "20px", fontSize: "20px", color: "red" }} class="fab fa-instagram"></i> <i style={{ paddingRight: "20px", paddingTop: "20px", fontSize: "20px", color: "red" }} class="fab fa-youtube"></i></p>

                    </div>
                    <div className="col-md-2 text-dark ms-5">
                        <h5>Shop By <i style={{ color: "red" }} class="fas fa-shopping-bag"></i> <i className="fas fa-shop"></i></h5>

                        <p> Your Order</p>
                        <p> Contuct-US</p>
                        <p> Payment</p>
                        <p> Shipping & Delivery</p>
                        <p> Condition</p>

                    </div>
                    <div className="col-md-2 text-dark ms-5">
                        <h5>Products <i style={{ color: "red" }} class="fas fa-store"></i></h5>

                        <p> Prices drop</p>
                        <p> New Products</p>
                        <p> Best Sales</p>
                        <p> Store</p>


                    </div>
                    <div className="col-md-2 text-dark ms-5">
                        <h5>Contact <i style={{ color: "red" }} className="fas fa-mouse-pointer"></i></h5>

                        <p> Contact:+123 556 8880</p>
                        <p> Email:contuct@gmail.com</p>
                        <p>New York,USA-1218</p>
                    </div>
                </div>
            </Container>
            <hr />
            <div className="text-center text-dark">

                <p>© Copyright 2021 | Designed By <span style={{ color: "red", fontWeight: "bold" }}>Foyjunnesa Mayna</span> | All Rights Reserved</p>

            </div>
        </div>
    );
};

export default Footer;