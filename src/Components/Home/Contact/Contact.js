import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact row pb-5">
            <div className="col-5 text-dark">
                <h2>Let us handle your project, professionally</h2>
                <small>
                    With well written codes we build amazing apps for all platforms, mobile and web apps in general
                </small>
            </div>
            <div className="col-5 offset-1">
                <br/>
                <input type="text" name="email" placeholder="Your email address" className="form-control" />
                <br/>
                <input type="text" name="name" placeholder="Your name / company's name" className="form-control" />
                <br/>
                <textarea name="message" id="" cols="30" rows="7"className="form-control"></textarea>
                <br/>
                <button type="submit" className="btn btn-dark px-5" >Send</button>
            </div>
            <small className="text-center text-dark text-muted pt-5 m-auto">copyright Orange labs 2020</small>
        </div>
    );
};

export default Contact;