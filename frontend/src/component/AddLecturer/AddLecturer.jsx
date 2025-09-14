import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddLecturer = () => {
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')
    const [sub , setSub] = useState('')

    console.log("sub from add lecturer" , sub )

    const today = new Date()
    const day = today.getDay()
    const date = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()

    const navigate = useNavigate();

    let ac_day;

    const Submit = async(e) => {
        try{
            e.preventDefault();

        const student = await axios.post("http://localhost:3001/createLecturer" , {name , password , sub})

        console.log(student.data._id)
  
        navigate('/AdminHome')
        }
        catch(err){
            console.error("erroror" , err)
        }
    }


    return(
        <div className="container">
            <form onSubmit={Submit}>
                <label>Lecturer's Name</label><br />
                <input type="text" name="regNo"
                onChange={(e) => setName(e.target.value)}
                /><br />
                <label>Create Login Password</label><br />
                <input type="text" name="name"
                onChange={(e) => setPassword(e.target.value)}
                /><br />
                <label>Subject</label><br />
                <select id="subject" name="subject"
                value={sub}
                onChange={(e) => setSub(e.target.value)
                }>
                <option value="null">Select subject here</option>
                <option value="SE">SoftWare Engineering</option>
                <option value="MERN">MERN</option>
                <option value="DIP">Digital Image Processing</option>
                <option value="LAMP">LAMP Technology</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddLecturer;