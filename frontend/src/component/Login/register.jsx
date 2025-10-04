import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import { useScaling } from "../../Scaling/scaling";

const Register = () => {

    const navigate = useNavigate()

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    console.log(name , email , password)

    const Submit = () => {
        axios.post('https://class-attendance-9e04.onrender.com/register' , {name , email , password})
        .then(result => console.log(result))
        .catch(err => console.log(err))

        alert("Registered Successfully")
        navigate('/')
    }

    return (
        <div className="register-container">
            <div className="register-card">
            <h2 className="register-title">User Registration Page</h2>
            <form onSubmit = {Submit} className="register-form">
                 <div className="form-group">
                <label htmlFor="name" className="form-label">Enter Name</label><br />
                <input type="text" 
                name="name"
                className="form-input"
                onChange={e => setName(e.target.value)}
                /> <br />
                </div>

                <div className="form-group">
                <label htmlFor="email" className="form-label">Enter Email</label><br />
                <input type="text" 
                name="email"
                className="form-input"
                onChange={e => setEmail(e.target.value)}
                /><br />
                </div>

                <div className="form-group">
                <label htmlFor="pass" className="form-label">Enter Password</label><br />
                <input type="text"
                name="name"
                className="form-input"
                onChange={e => setPassword(e.target.value)}
                /><br />
                </div>

                <button type="submit"  className="submit-btn">Submit</button>
            </form><br />

            <div className="login-links">
            <Link to='/' className="login-link">User Login</Link><br />
            <Link to='/LectureLogin' className="login-link">Login as Lecturer</Link> <br />
            <Link to='/adminLogin' className="login-link">Login as Admin</Link>
        </div>
       </div> 
       </div>
    )
}

export default Register;