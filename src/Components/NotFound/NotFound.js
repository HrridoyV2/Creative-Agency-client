import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="alert-warning text-center mt-5">This page is not available</h1>
            <Link to="/">
            <button className="btn btn-secondary">
                Go to Home Page
            </button>
            </Link>
        </div>
    );
};

export default NotFound;