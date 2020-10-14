import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import Sidebar from '../CustomerSidebar/CustomerSidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = (data) =>{
        data.photoURL = loggedInUser.photoURL;
        
        const reviewDetails = {...data,loggedInUser,}
        fetch('https://glacial-bastion-99515.herokuapp.com/reviews', { 
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reviewDetails)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert("Review Placed successfully")
            }
        })
    }
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
                <form onSubmit={handleSubmit(onSubmit)}  className="col-md-5 col-sm-12 col-12 bg-light p-5">
                <input type="text" name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} placeholder="Your name/company's name" className="form-control" />
                {errors.name && <span style={{color:"red"}}>This field is required</span>}
                <br/>
                <input type="text" name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} placeholder="Your email address" className="form-control" />
                {errors.email && <span style={{color:"red"}}>This field is required</span>}
                <br/>
                <input type="text" name="service" ref={register({ required: true })} placeholder="Graphic Design" className="form-control" />
                {errors.service && <span style={{color:"red"}}>This field is required</span>}
                <br/>
                <textarea name="description" ref={register({ required: true })} id="" cols="30" rows="10" placeholder="Project Details" className="form-control" />
                {errors.description && <span style={{color:"red"}}>This field is required</span>}
                <br/>
                  <button type="submit" className="btn btn-dark px-5">Send</button>
                </form>
                
                </div>
                
            </div>
        </section>
    );
};

export default Review;