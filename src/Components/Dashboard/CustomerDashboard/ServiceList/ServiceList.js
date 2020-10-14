import React, { useContext, useEffect } from 'react';
import './ServiceList.css'
import service1 from '../../../../images/icons/service1.png'
import Sidebar from '../CustomerSidebar/CustomerSidebar';
import { useState } from 'react';
import { UserContext } from '../../../../App';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const ServiceList = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://glacial-bastion-99515.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        })
        .then(res => res.json())
        .then(data => setSelectedServices(data));
    },[])
    return (
        <section >
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 content">
                <div className="d-flex">
                    <h2 className="p-3">Order</h2>
                <h2 className="ml-auto p-3">Hrridoy</h2>
                </div>
                <div className="row">
                    {
                        selectedServices.map(service => 
                            <div className="col-6">
                        <div className="service-card bg-light">
                        <div>
                            <img src={service.serviceImg} className="img-fluid" />
                        </div>
                        <h3>{service.serviceTitle}</h3>
                        <p>{service.serviceDescription}</p>
                        </div>
                    </div>
                        )    
                    }
                </div>
                
                </div>
                
            </div>
        </section>
    );
};

export default ServiceList;