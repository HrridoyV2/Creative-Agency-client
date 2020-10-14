import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const MakeAdmin = () => {
    return (
        <section >
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 content">
                <div className="d-flex">
                    <h2 className="p-3">Order</h2>
                <h2 className="ml-auto p-3">Hrridoy</h2>
                </div>
                
                <form action="">
                    <div className="d-flex col-md-5">
                    <input type="text" name="admin" placeholder="jon@gmail.com" className="form-control"/>
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
                
                
                </div>
                
            </div>
        </section>
    );
};

export default MakeAdmin;