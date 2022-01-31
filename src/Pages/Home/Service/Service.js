import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { img, name, price, description } = service
    return (
        <div>
            <Fade right>
                <Col>
                    <Card className="text-center shadow mb-3 mt-3 bg-body rounded" style={{ minHeight: "400px" }}>
                        <div className='img-parent'><Card.Img className='cart-img' variant="top" src={img} style={{ height: "200px" }} /></div>
                        <Card.Body>
                            <Card.Title className="fw-bold">{name}</Card.Title>
                            <Card.Title className="fw-bold text-danger">Price $ {price}</Card.Title>
                            <Card.Text className="text-justify text-muted">
                                {description.slice(0, 150)}
                            </Card.Text>
                            <Link to={`/service/$:id}`} >
                                <Button style={{ width: '100%', fontWeight: 'bold' }} variant="outline-danger"><i class="fas fa-shopping-cart"></i> Buy Now </Button>
                            </Link>


                        </Card.Body>
                    </Card>
                </Col>
            </Fade>

        </div>
    );
};

export default Service;









// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Service.css'

// const Service = ({ service }) => {
//     const { _id, img, name, description } = service;
//     return (
//         <div className='container-service'>
//             <img style={{ width: "75%" }} src={img} alt="" />
//             <h3 className='name'>{name}</h3>
//             <p>{description}</p>
//             <Link to={`/booking/${_id}`}>
//                 <button>Book Now</button>
//             </Link>
//         </div>
//     );
// };

// export default Service;