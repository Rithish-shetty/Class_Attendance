import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const navigate = useNavigate()

    const [name , setName] = useState('')
    const [password , setPassword] = useState('')

    const Submit = (e) => {
        e.preventDefault();
        axios.post('https://class-attendance-1.onrender.com/adminLogin' , {name , password})
        .then(result => {
            console.log("result" , result.data)
            if(result.data === "success"){
                console.log(result , "Login success")
                navigate('/AdminHome')
            }
            else{
                console.log("mismatch")
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-container">
            <div className="login-card">   
            <h2 className="login-title">Admin Login Page</h2>
        <form onSubmit={Submit} className="login-form">

            <div className="form-group">
            <label htmlFor="name">Enter Name</label><br />
                <input type="text" 
                name="name"
                onChange={e => setName(e.target.value)}
                /> <br />
            </div> 

            <div className="form-group">
            <label htmlFor="pass">Enter Password</label><br />
                <input type="text"
                name="pass"
                onChange={e => setPassword(e.target.value)}
                /><br />
            </div>
                <button type="submit" className="submit-btn">Submit</button>
        </form>

        <div className="login-links">
        <Link to='/Register' className="login-link">User Registration</Link><br />
        <Link to='/' className="login-link">User Login</Link><br />
        <Link to='/LectureLogin' className="login-link">Login as Lecturer</Link> <br />
        </div>
        </div>
        </div>
    )
}

export default AdminLogin;