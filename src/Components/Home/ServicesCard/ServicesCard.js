import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css'
const ServicesCard = ({service}) => {
    return (
        <div className="col-lg-4 text-center text-dark">
            <Link to={'/order/'+service.id}>
            <div className="m-5 p-5 card-hover">
            <div>
                {
                    service.image ? <img src={`data:image/png;base64,${service.image.img}`} alt=""/>
                    :
                    <img src={service.img}/>
                }
            </div>
    <h4 className="card-title text-dark mt-3">{service.title}</h4>
    <div className="text-dark">{service.description}</div>
            </div>
            </Link>
</div>
    );
};

export default ServicesCard;