import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating'




const WatchReview = (props) => {
    const { name, description, rating, email } = props.review


    return (
        <div>


            <Card style={{ backgroundColor: 'white', boxShadow: "2px 2px 25px grey" }} className="text-center  h-100">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title> <small>{email}</small> </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <p style={{ color: 'goldenrod', fontSize: '10px' }}>

                        <Rating

                            initialRating={rating}
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            readonly
                        >
                        </Rating>
                    </p>


                </Card.Body>
            </Card>




        </div>
    );
};

export default WatchReview;