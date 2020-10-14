import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css'
const ServicesCard = ({service}) => {
    return (
        <div className="col-lg-4 text-center text-dark">
            <Link to='/customer/order'>
            <div className="m-5 p-5 card-hover">
            <div>
                <img src={service.img} alt=""/>
            </div>
    <h4 className="card-title text-dark mt-3">{service.title}</h4>
    <div className="text-dark">{service.description}</div>
            </div>
            </Link>
</div>
    );
};

export default ServicesCard;