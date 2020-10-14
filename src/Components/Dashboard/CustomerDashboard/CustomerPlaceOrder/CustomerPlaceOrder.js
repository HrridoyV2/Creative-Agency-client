import React, { useContext, useEffect } from 'react';
import Sidebar from '../CustomerSidebar/CustomerSidebar';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import { useState } from 'react';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const CustomerPlaceOrder = () => {
    const {id} = useParams();
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://glacial-bastion-99515.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    const selectedService = services.find(service => service.id === id);
    
    const onSubmit = (data) => {

        const orderDetails = {data, ...loggedInUser, serviceImg: selectedService.img, serviceTitle:selectedService.title, serviceDescription:selectedService.description}
        fetch('https://glacial-bastion-99515.herokuapp.com/orders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Order PLaced successfully');
                history.push('customer/service')
            }
        })
    };

    return (
        <section >
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 bg-light">
                <div className="d-flex">
                    <h2 className="p-3">Order</h2>
                <h2 className="ml-auto p-3">Hrridoy</h2>
                </div>
                <div className="row content">
                <form onSubmit={handleSubmit(onSubmit)} className="col-md-5 col-sm-12 col-12 p-5">
                <input type="text" name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} placeholder="Your name/company's name" className="form-control" />
                {errors.name && <span style={{color:"red"}}>This field is required</span>}
                <br/>
                <input type="text" name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} placeholder="Your email address" className="form-control" />
                {errors.email && <span style={{color:"red"}}>This field is required</span>}
                <br/>
                <input type="text" name="service" ref={register({ required: true })}placeholder="Graphic Design" className="form-control" />
                {errors.service && <span style={{color:"red"}}>This field is required</span>}
                <br/>
                <textarea name="details" id="" cols="30" ref={register({ required: true })} rows="10" placeholder="Project Details" className="form-control" />
                {errors.details && <span style={{color:"red"}}>This field is required</span>}
                <br/>
                    <div className="row ">
                    <input type="number" name="price" ref={register({ required: true })} placeholder="Price" className="form-control col-md-6" />
                    {errors.price && <span style={{color:"red"}}>This field is required</span>}
                
                <input type="file" name="file" className="form-control col-md-6"/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-dark px-5">Send</button>
                </form>
                </div>
                
                </div>
                
            </div>
        </section>
    );
};

export default CustomerPlaceOrder;