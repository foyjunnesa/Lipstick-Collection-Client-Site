import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';
import { Slide } from 'react-reveal';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>

            <p className="text-center text-danger mt-5 "> <hr /></p>
            <Slide top>
                <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{ fontSize: "30px", fontFamily: 'cursive' }}>
                    <i class="far fa-grin-hearts"></i> Our Collection</span></h3>
            </Slide>

            <div className='service-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;