import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddStd = () => {
    const [name , setName] = useState('')
    const [regNo , setRegNo] = useState('')

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

        const student = await axios.post("http://localhost:3001/create" , {regNo , name , se : 0 , mern : 0 , dip : 0 , lamp : 0
            , se_total : 0 , mern_total : 0 , dip_total : 0 , lamp_total : 0
        })

        console.log(student.data._id)
        const docid = student.data._id;

        const result = await axios.post("http://localhost:3001/createDoc" , {
            regNo ,
            name , 
            date : `${date} / ${month} / ${year} - ${ac_day}` ,
            docId : docid,
            se_date : 0,
            mern_date : 0,
            dip_date : 0,
            lamp_date : 0,
            se_present : 0,
            mern_present : 0,
            dip_present : 0,
            lamp_present : 0
        })
        console.log(result.data.docId)
  
        navigate('/AdminHome')
        }
        catch(err){
            console.error("erroror" , err)
        }
    }


    return(
        <div className="container" style={{justifyContent : 'center' , display : 'flex', alignItems : 'center'}}>
            <form onSubmit={Submit}>
                <label>Student Register Number</label><br />
                <input type="text" name="regNo"
                onChange={(e) => setRegNo(e.target.value)}
                /><br />
                <label>Student Name</label><br />
                <input type="text" name="name"
                onChange={(e) => setName(e.target.value)}
                /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddStd;