import React, { useContext, useEffect } from 'react';
import './CustomerServiceList.css'
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
                <div className="col-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-10 content">
                <div className="d-flex">
                    <div><h2 className="p-md-3">Order</h2></div>
                <div className="ml-auto p-md-3 d-flex">
                    <img src={loggedInUser.photoURL} style={{height: "40px", borderRadius: "50%"}}/>
                    <h2>{loggedInUser.name}</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        selectedServices.map(service => 
                            <div className="col-md-6">
                        <div className="service-card bg-light">
                        <div className="d-flex">
                            <img src={service.serviceImg} className="img-fluid" />
                            <p className={`ordered-status ${service.status}`}><span>{`${service.status}`}</span></p>
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