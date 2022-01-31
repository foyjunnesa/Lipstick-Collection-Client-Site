import React from 'react';
import './Baner.css'
import { Carousel } from 'react-bootstrap';
const Baner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src='https://image.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model-with-bright-makeup-with-red-lips-with-perfect-clean-skin-big-black-hat_158538-13488.jpg' style={{ height: "540px", backgroundSize: "cover" }}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src='https://t3.ftcdn.net/jpg/03/07/39/72/240_F_307397258_gXquxP1Ag10A2wdi1JCeXAcnuBhB15fX.jpg' style={{ height: "540px", backgroundSize: "cover" }}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src='https://t3.ftcdn.net/jpg/02/34/17/12/240_F_234171243_ojVsewHI9XN03bqo72hMoMDbo89qPLI3.jpg' style={{ height: "540px", backgroundSize: "cover" }}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src='https://cdn.pixabay.com/photo/2015/05/31/13/29/lipstick-791761__340.jpg' style={{ height: "540px", backgroundSize: "cover" }}
                        alt="Four slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src='https://t4.ftcdn.net/jpg/03/02/83/37/240_F_302833722_tW19HrU8KhgxoIMu06FOqBRVKqFunu0W.jpg' style={{ height: "540px", backgroundSize: "cover" }}
                        alt="Five slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Baner;