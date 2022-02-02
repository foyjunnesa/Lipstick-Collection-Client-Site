import React from 'react';

const BuyNow = () => {
    return (

        <div className="col-md-8" style={{ display: 'flex', }}>

            <form className="text-center">
                <h3 className="text-center text-muted mt-5 mb-5"> <span className="fw-bold text-danger" style={{ fontSize: "30px", fontFamily: '' }}>
                    Send Your Information for Fastest Delivery</span></h3>
                <input style={{ margin: '30px', height: '50px' }} required placeholder="Enter Your Email" type="email" />
                <input style={{ margin: '30px', height: '50px' }} required placeholder="Enter Your Password" type="password" />
                <input style={{ margin: '30px', height: '50px' }} required placeholder="Phone Number" type="number" />
                <input style={{ margin: '30px', height: '50px' }} required placeholder="Enter Your Valid Address" />

                <input style={{ color: "white", border: "unset", borderRadius: "5px", paddingTop: "7px", paddingBottom: "7px" }} className=" bg-danger fw-bold w-50 mx-auto" value="Order Now" type="submit" />
            </form>





        </div>
    );
};

export default BuyNow;