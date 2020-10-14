import React from 'react';
import { Link } from 'react-router-dom';
import webDesign from '../../../images/icons/service1.png';
import graphicDesign from '../../../images/icons/service2.png';
import webDevelopment from '../../../images/icons/service3.png';
import ServicesCard from '../ServicesCard/ServicesCard';
const services = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product',
        img: webDesign,
    },
    {
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out',
        img: graphicDesign,
    },
    {
        title: 'Web development',
        description: 'With well weitten codes, we build amazing apps for all platforms, mobile and web apps in general',
        img: webDevelopment,
    }
]
const ProvidedServices = () => {
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