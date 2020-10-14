import React from 'react';
import './OurWorks.css'

import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import { Carousel } from 'react-bootstrap';
const OurWorks = () => {
    return (
        
        <div className="bg-secondary">
          <h2 className="title">Here are some of <span>our works</span></h2>
          <Carousel className="carousel ">
        <Carousel.Item>
          <img
            className="img-fluid"
            src={carousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src={carousel2}
            alt="Third slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src={carousel3}
            alt="Third slide"
          />
      
        </Carousel.Item>
      </Carousel>
        </div>
        
    );
};

export default OurWorks;