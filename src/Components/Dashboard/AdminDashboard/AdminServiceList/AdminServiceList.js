import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar'
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

    // const [value,setValue]=useState('');
    // const handleSelect=(e)=>{
    //   console.log(e);
    //   setValue(e) 
    // }
    // const updateStatus = (status) => {
    //     console.log(status);
    // }
    //
    const options = ["Pending","On-Goning", "Done"];
    const [status,setStatus] = useState('Pending');
    const [id, setId] = useState('');
    const updateStatus = (id) => {
        setId(id);
    }
    const  onSelect = (event) => { 
        setStatus(event);
        const updated = {id, status};
        fetch(`https://glacial-bastion-99515.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Status updated successfully')
            }
        })
        // e.preventDefault();
    }
    //
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
                    <h2>{loggedInUser.name}</h2>
                    </div>
                </div>
                {/* {isAdmin && */}
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
                                <DropdownButton
                                    alignRight
                                    title={order.status}
                                    id="dropdown-menu-align-right"
                                    onClick={() => updateStatus(order._id)}
                                    onSelect={onSelect}>
                                    
                                        {options.map(option => (
                                            <Dropdown.Item
                                            eventKey={option}
                                            key={option}>
                                            {option}
                                            </Dropdown.Item>
                                        ))}
                                    
                                </DropdownButton>
                                {/* <Dropdown onSelect={onSelect}
                                 onClick={() => updateStatus(order._id)}
                                >
                                    <Dropdown.Toggle
                                        >{status}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        {options.map(option => (
                                            <Dropdown.Item
                                            eventKey={option}
                                            key={option}>
                                            {option}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                </td>
                            </tr>
                            )
                            
                        }
                    </tbody>
                </table>
                </div>
                {/* } */}
                
                </div>
                
            </div>
        </section>
    );
};

export default AdminServiceList;