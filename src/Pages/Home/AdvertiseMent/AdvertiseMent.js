import React from 'react';
import './AdvertiseMent.css';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';


const AdvertiseMent = () => {
    return (
        <div>
            <div className="parent mb-5 mt-3">

                <div className="d-flex text-center justify-content-center align-items-center h-100">
                    <div>

                        <LightSpeed right>
                            <h3 style={{ fontFamily: 'cursive' }} className="text-white">“I believe I have the perfect red lipstick for every woman.”-Lipstick Collection.</h3>
                        </LightSpeed>


                        <div>

                            <Slide right>
                                <button className="btn btn-light text-danger fw-bold m-3">Read Quotes</button>
                            </Slide>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdvertiseMent;