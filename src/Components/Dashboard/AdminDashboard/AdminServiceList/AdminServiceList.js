import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import img from '../../../../images/icons/service1.png'
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const AdminServiceList = () => {
    //
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://glacial-bastion-99515.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])
    //
    useEffect(() => {
        fetch('https://glacial-bastion-99515.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <section >
            <div style={containerStyle} className="row">
                <div className="col-2">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-10">
                <div className="d-flex">
                    <div><h2 className="p-md-3">Order</h2></div>
                <div className="ml-auto p-md-3 d-flex">
                    <img src={loggedInUser.photoURL} style={{height: "40px", borderRadius: "50%"}}/>
                    <h2>Hrridoy</h2>
                    </div>
                </div>
                {isAdmin &&
                    <div className="content row">
                <table className="table bg-light m-md-3">
                    <thead className="bg-secondary">
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Project Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceTitle}</td>
                                <td>{order.serviceDescription}</td>
                                <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>
    
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            )
                            
                        }
                    </tbody>
                </table>
                </div>
                }
                
                </div>
                
            </div>
        </section>
    );
};

export default AdminServiceList;