import React from 'react';
import Sidebar from '../CustomerSidebar/CustomerSidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const Review = () => {
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
                <form  className="col-md-5 col-sm-12 col-12 bg-light p-5">
                <input type="text" name="name" placeholder="Your name/company's name" className="form-control" />
                <br/>
                <input type="text" name="email" placeholder="Your email address" className="form-control" />
                <br/>
                <input type="text" name="service" placeholder="Graphic Design" className="form-control" />
                <br/>
                <textarea name="details" id="" cols="30" rows="10" placeholder="Project Details" className="form-control" />
                <br/>
                  <button className="btn btn-dark px-5">Send</button>
                </form>
                
                </div>
                
            </div>
        </section>
    );
};

export default Review;