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
        fetch('https://glacial-bastion-99515.herokuapp.com/isAdmin', {
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
        fetch('https://glacial-bastion-99515.herokuapp.com/makeAdmin', {
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
                <div className="col-2">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-10 content">
                <div className="d-flex">
                    <div><h2 className="p-md-3">Order</h2></div>
                <div className="ml-auto p-md-3 d-flex">
                    <img src={loggedInUser.photoURL} style={{height: "40px", borderRadius: "50%"}}/>
                    <h2>{loggedInUser.name}</h2>
                    </div>
                </div>
                
                { isAdmin &&
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex col-md-5">
                    <input type="text" name="email" ref={register({ required: true })} placeholder="jon@gmail.com" className="form-control"/>
                    {errors.email && <span style={{color:"red"}}>This field is required</span>}
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