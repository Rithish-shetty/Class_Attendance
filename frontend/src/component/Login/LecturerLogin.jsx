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
        // <div classNme="login-container">
        //     <div className="login-card">
        //     <h2 className="login-title">Lecturer Login Page</h2>
        // <form onSubmit={Submit} className="login-form">

        //     <div className="form-group">
        //     <label htmlFor="name">Enter Name</label><br />
        //         <input type="text" 
        //         name="name"
        //         onChange={e => setName(e.target.value)}
        //         /> <br />
        //     </div> 

        //     <div className="form-group">
        //     <label htmlFor="pass">Enter Password</label><br />
        //         <input type="text"
        //         name="pass"
        //         onChange={e => setPassword(e.target.value)}
        //         /><br />
        //     </div>

        //         <button type="submit" className="submit-btn">Submit</button>
        // </form>
        
        // <div className="login-links">

        // </div>
        // </div>
        // </div>
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
                <Link to='/Register' className="login-link">Register</Link>
                <br />
                <Link to='/' className="login-link">User Login</Link><br />
                <Link to='/adminLogin' className="login-link">Login as Admin</Link>
                </div>
                </div>
                </div>
    )
}

export default LecturerLogin;