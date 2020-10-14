import React from 'react';
import './ServiceList.css'
import service1 from '../../../../images/icons/service1.png'
import Sidebar from '../CustomerSidebar/CustomerSidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const ServiceList = () => {
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
                    <div className="col-6">
                        <div className="service-card bg-light">
                        <div>
                            <img src={service1} className="img-fluid" />
                        </div>
                        <h3>Web & Mobile design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eveniet a? Eaque non eum voluptas.</p>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="service-card bg-light">
                    <div>
                            <img src={service1} className="img-fluid" />
                        </div>
                        <h3>Web & Mobile design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eveniet a? Eaque non eum voluptas.</p>
                    </div>
                    </div>
                </div>
                
                </div>
                
            </div>
        </section>
    );
};

export default ServiceList;