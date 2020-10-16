import React from 'react';
import './CustomerSidebar.css'
import { Link } from 'react-router-dom';
import shoppingCart from '../../../../images/Extra-Logo/shopping-cart-outline 1.png';
import service from '../../../../images/Extra-Logo/Group 1360.png';
import review from '../../../../images/Extra-Logo/Group 1368.png';
const Sidebar = () => {
    return (
        <div className="d-flex flex-column justify-content-between col-2 py-5  px-md-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="d-flex text-dark">
                        <img src={shoppingCart} alt=""/> <span className="ml-md-3">Order</span>
                    </Link>
                </li><br/>
                <li>
                    <Link to="/customer/ordered-services" className="text-dark d-flex">
                        <img src={service}/>
                         <span className="ml-md-3">Service list</span>
                    </Link>
                </li><br/>
                <li>
                    <Link to="/customer/review" className="text-dark d-flex">
                        <img src={review} alt=""/>
                         <span className="ml-md-3">Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Sidebar;