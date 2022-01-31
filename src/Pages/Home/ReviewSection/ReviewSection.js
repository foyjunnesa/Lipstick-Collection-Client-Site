import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import WatchReview from '../WatchReview/WatchReview';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {

        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div className="text-center mb-5">


            <Container>
                <p className="text-center text-danger mt-5 "> <hr /></p>
                <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{ fontSize: "30px", fontFamily: "Verdana, sans-serif" }}>
                    Customer's Review</span></h3>
                <Fade bottom>
                    <Row xs={1} md={2} className="g-5" >

                        {
                            reviews.map(review => <WatchReview review={review} key={review._id}></WatchReview>)
                        }
                    </Row>
                </Fade>



            </Container>

        </div>
    );
};

export default ReviewSection;