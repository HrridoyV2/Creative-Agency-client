import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar'

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const AdminAddService = () => {
    //
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])
    //
    const { register, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('description', info.description)
        fetch('http://localhost:5000/addService', { 
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        })
    };
    return (
        <section >
                <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 content">
                <div className="d-flex bg-light">
                    <h2 className="p-3">Order</h2>
                <h2 className="ml-auto p-3">Hrridoy</h2>
                </div>
                
            <form onSubmit={handleSubmit}>
                <div className="row bg-light m-5">
                    <div className="col-md-5p-5 m-5">
                        <h5>Service Title</h5>
                        <input type="text" onBlur={handleBlur} name="title" ref={register}placeholder="Enter title" className="form-control" />
                        {errors.title && <span style={{color:"red"}}>This field is required</span>}
                        <br/>
                        <h5>Description</h5>  
                        <textarea onBlur={handleBlur} name="description" ref={register} cols="30" rows="5" placeholder="Enter description" className="form-control"></textarea>
                        {errors.description && <span style={{color:"red"}}>This field is required</span>}      
                    </div>
                    <div className="col-md-4">
                        <h5>Icon</h5>
                        <input type="file" onChange={handleFileChange} name="file" ref={register}placeholder="Enter file" className="form-control"/>
                        {errors.file && <span style={{color:"red"}}>This field is required</span>}
                    </div>
                    
                </div>
                <button type="submit" className="btn btn-success" style={{marginLeft: "1000px"}}>Submit</button>
                    
                </form>
                
                </div>
                
            </div>
            
        </section>
    );
};

export default AdminAddService;