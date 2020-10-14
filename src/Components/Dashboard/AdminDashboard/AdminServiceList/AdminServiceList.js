import React from 'react';
import { Dropdown } from 'react-bootstrap';
import AdminSidebar from '../AdminSidebar/AdminSidebar'
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const AdminServiceList = () => {
    return (
        <section >
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                <div className="d-flex">
                    <h2 className="p-3">Order</h2>
                <h2 className="ml-auto p-3">Hrridoy</h2>
                </div>
                <div className="content row">
                <table className="table bg-light m-3">
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
                        <tr>
                            <td>Sufi Ahmed Hamim</td>
                            <td>sufi@gmail.com</td>
                            <td>Graphic Design</td>
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, culpa.</td>
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
                    </tbody>
                </table>
                </div>
                
                </div>
                
            </div>
        </section>
    );
};

export default AdminServiceList;