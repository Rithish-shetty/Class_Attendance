import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LecturerLogin = () => {

    const navigate = useNavigate()

    const [name , setName] = useState('')
    const [password , setPassword] = useState('')

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/LectureLogin' , {name , password})
        .then(result => {
            console.log("result" , result.data)
            if(result.data === "SE"){
                console.log(result , "Login success")
                navigate('/SE')
            }
            else if(result.data === "MERN"){
                console.log(result , "Login success")
                navigate('/MERN')
            }
            else if(result.data === "DIP"){
                console.log(result , "Login success")
                navigate('/DIP')
            }
            else if(result.data === "LAMP"){
                console.log(result , "Login success")
                navigate('/LAMP')
            }
            else{
                console.log("mismatch")
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h4>Lecturer Login Page</h4>
        <form onSubmit={Submit}>
            <label htmlFor="name">Enter Name</label><br />
                <input type="text" 
                name="name"
                onChange={e => setName(e.target.value)}
                /> <br />

            <label htmlFor="pass">Enter Password</label><br />
                <input type="text"
                name="pass"
                onChange={e => setPassword(e.target.value)}
                /><br />
                <button type="submit">Submit</button>
        </form>
        <Link to='/Register'>Register</Link>
        <br />
        <Link to='/'>User Login</Link><br />
        <Link to='/adminLogin'>Login as Admin</Link>
        </div>
    )
}

export default LecturerLogin;