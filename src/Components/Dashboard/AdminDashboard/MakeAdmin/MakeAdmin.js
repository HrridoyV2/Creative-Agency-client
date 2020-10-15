import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar'
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const MakeAdmin = () => {
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
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert('New Admin Added successfully')
            }
        })
    }
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
                
                { isAdmin &&
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex col-md-5">
                    <input type="text" name="admin" ref={register({ required: true })} placeholder="jon@gmail.com" className="form-control"/>
                    {errors.admin && <span style={{color:"red"}}>This field is required</span>}
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
                }
                
                
                </div>
                
            </div>
        </section>
    );
};

export default MakeAdmin;