import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    console.log(name , email , password)

    const Submit = () => {
        axios.post('http://localhost:3001/register' , {name , email , password})
        .then(result => console.log(result))
        .catch(err => console.log(err))

        alert("Registered Successfully")
        navigate('/')
    }

    return (
        <div>
            <h4>user Registration Page</h4>
            <form onSubmit = {Submit} >
                <label htmlFor="name">Enter Name</label><br />
                <input type="text" 
                name="name"
                onChange={e => setName(e.target.value)}
                /> <br />

                <label htmlFor="email">Enter Email</label><br />
                <input type="text" 
                name="email"
                onChange={e => setEmail(e.target.value)}
                /><br />

                <label htmlFor="pass">Enter Password</label><br />
                <input type="text"
                name="name"
                onChange={e => setPassword(e.target.value)}
                /><br />
                <button type="submit">Submit</button>
            </form><br />
            <Link to='/'>User Login</Link><br />
            <Link to='/LectureLogin'>Login as Lecturer</Link> <br />
            <Link to='/adminLogin'>Login as Admin</Link>
        </div>
    )
}

export default Register;