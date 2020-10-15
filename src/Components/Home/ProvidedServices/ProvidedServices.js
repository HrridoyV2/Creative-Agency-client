import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
const ProvidedServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://glacial-bastion-99515.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h1 className="text-center mt-5"><strong>Provide awesome <span style={{color: "#7AB259"}}>services</span></strong></h1>
            <div className="row">
            
            {
                
                services.map((service) => 
                <ServicesCard service={service}></ServicesCard>
                )
            }
        </div>
        </div>
    );
};

export default ProvidedServices;