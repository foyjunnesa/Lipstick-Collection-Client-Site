import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import { Container, Row } from 'react-bootstrap';
import Service from '../Home/Service/Service';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const ExploreMore = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <Container>
                <p className="text-center text-success"> <hr /></p>
                <Slide top>
                    <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{ fontSize: "30px", fontFamily: 'cursive' }}>
                        <i className="fas fa-biking"></i> Featured Product</span></h3>
                </Slide>

                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}></Service>)
                    }

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ExploreMore;