import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found text-center">
            <h3 className="text-center fs-1 fw-bold text-danger">404</h3>
            <h5 className="text-center">OPPS SORRY!!! PAGE NOT FOUND</h5>
            <Link to="/home"><button className="btn btn-danger fw-bold">Back Home</button></Link>
        </div>
    );
};

export default NotFound;