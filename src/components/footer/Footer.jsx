import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">

            <Container className="mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4">
                        <img style={{ width: '100px' }} src="https://t4.ftcdn.net/jpg/03/16/15/05/240_F_316150591_V75Nnx6euwidlHGdgmYTfLYf36Q1wSqH.jpg" alt="" />
                        <h4 style={{ fontFamily: 'cursive' }} className="text-align-justify text-white pt-3 fw-bold">Lipstick Shop</h4>
                        <p> <i style={{ paddingRight: "20px", paddingTop: "17px", fontSize: "18px", color: "white", cursor: "pointer" }} className="fab fa-google-plus-g"></i> <i style={{ paddingRight: "20px", paddingTop: "17px", fontSize: "18px", color: "red", cursor: "pointer" }} class="fab fa-youtube"></i> <i style={{ paddingRight: "20px", paddingTop: "17px", fontSize: "18px", color: "white", cursor: "pointer" }} class="fab fa-instagram"></i> <i style={{ color: "rgb(29, 155, 240)", paddingRight: "20px", paddingTop: "17px", fontSize: "18px", cursor: "pointer" }} className="fab fa-twitter"></i> </p>

                    </div>
                    <div className="col-md-2 ms-5 text-light">
                        <h5>Shop By <i style={{ color: "gray" }} class="fas fa-shopping-bag"></i> <i className="fas fa-shop"></i></h5>

                        <p> Your Order</p>
                        <p> Contuct-US</p>
                        <p> Payment</p>
                        <p> Shipping & Delivery</p>
                        <p> Condition</p>

                    </div>
                    <div className="col-md-2 ms-5 text-light">
                        <h5>Products <i style={{ color: "gray" }} class="fas fa-store"></i></h5>

                        <p> Prices drop</p>
                        <p> New Products</p>
                        <p> Best Sales</p>
                        <p> Store</p>


                    </div>
                    <div className="col-md-2 text-light ms-5">
                        <h5>Contact <i style={{ color: "gray" }} className="fas fa-mouse-pointer"></i></h5>

                        <p> Contact:+123 556 8880</p>
                        <p> Email:contuct@gmail.com</p>
                        <p>New York,USA-1218</p>
                    </div>
                </div>
            </Container>
            <hr />
            <div className="text-center text-light">

                <p> <small style={{ fontSize: "12px" }}> © Copyright 2022 | Designed By <span style={{ fontFamily: "lucida sans", color: "orange", fontWeight: "bold" }}>Foyjunnesa Mayna</span> | All Rights Reserved </small></p>

            </div>
        </div>
    );
};

export default Footer;
