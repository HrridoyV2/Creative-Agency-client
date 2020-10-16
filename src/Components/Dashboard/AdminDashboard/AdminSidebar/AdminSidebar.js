import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../../../../images/Extra-Logo/shopping-cart-outline 1.png';
import service from '../../../../images/Extra-Logo/Group 1360.png';
import review from '../../../../images/Extra-Logo/Group 1368.png';
import { UserContext } from '../../../../App';
const Sidebar = () => {
    return (
        <div className="d-flex flex-column justify-content-between col-2 py-md-5 px-md-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/admin/ordered-services" className="d-flex text-dark">
                        <img src={shoppingCart} alt=""/> <span className="ml-md-3">Service list</span>
                    </Link>
                </li>
                <br/>
                <li>
                    <Link to="/admin/add-service" className="text-dark d-flex">
                        +
                         <span className="ml-md-3">Add Service</span>
                    </Link>
                </li><br/>
                <li>
                    <Link to="/admin/make-admin" className="text-dark d-flex">
                        <img src={review} alt=""/>
                         <span className="ml-md-3">Make Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;