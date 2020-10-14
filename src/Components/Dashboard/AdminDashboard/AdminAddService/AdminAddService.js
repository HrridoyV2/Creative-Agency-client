import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const AdminAddService = () => {
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
                
                <div className="row">
                <form action=""  className="row">
                    <div className="col-md-5 bg-light p-5 m-5">
                        <h5>Service Title</h5>
                        <input type="text" name="title" placeholder="Enter title" className="form-control" />
                        <br/>
                        <h5>Description</h5>  
                        <textarea name="description" id="" cols="30" rows="5" placeholder="Enter description" className="form-control"></textarea>      
                    </div>
                    <div className="col-md-4 bg-light">
                        <h5>Icon</h5>
                        <input type="file" name="file" placeholder="Enter file" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-success ml-auto">Submit</button>
                </form>
                </div>
                
                
                </div>
                
            </div>
        </section>
    );
};

export default AdminAddService;