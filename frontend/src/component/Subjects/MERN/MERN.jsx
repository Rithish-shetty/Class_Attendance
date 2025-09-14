import React, { useEffect, useState } from "react";
import Table from "../../Table/Table";
import axios from 'axios';

const MERN = () => {

    const [student , setStudent] = useState([])

    const [selectedDate , setSelectedDate] = useState("")

    const arr = []

    console.log("Student" , student )

    useEffect(() => {
        axios.get("http://localhost:3001/getStudent")
        .then(item => setStudent(item.data))
        .catch(err => console.log(err))
    }, [])

     const update = async() => {
        try{
            const add  = await axios.put("http://localhost:3001/mern/add/"+arr)
            console.log(add.data)

            const seDate = await axios.put("http://localhost:3001/mernDate/add/"+arr , {selectedDate})
            console.log(seDate.data)

            arr.length = 0
            window.location.reload()
        }
        catch(err){
            console.error("erorororor" , err)
        }
        
    }

    const remove = (id) => {
        axios.put("http://localhost:3001/mern/remove/"+id)
        // window.location.reload()
    }

    const getDetails = (id) => {
        console.log("details ID:" , id)
        axios.get("http://localhost:3001/getDetails/"+id)
        .then(result => arr.push(result.data._id))
        .catch(err => console.log(err))
        console.log("aarr" , arr)
    }

    const dateFunc = (date) => {
        setSelectedDate(date)
    }

    const noOfClass = (totalClass) => {
        console.log("total class in mern" , totalClass)
        axios.put("http://localhost:3001/mern_total" , {totalClass})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        window.location.reload()
    }

    
    return(
        <div>
            <Table value = {student} subName={"MERN"} onRemove={remove} Sub={update} present={getDetails} sub="mern" 
            sName = {"mern_date"}  att = {"mern_present"} subjectName={"mern_date"}
            btnName = {"Present"}
            sendDate = {dateFunc}
            addClass = {(e) => {
                e.preventDefault();
                axios.put("http://localhost:3001/mernDate/addClass")
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }}
            removeClass = {(e) => {
                e.preventDefault();
                axios.put("http://localhost:3001/mernDate/removeClass")
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }}
            totalClass = {"mern_total"}
            noOfClass = {noOfClass}
            />
        </div>
    );
}

export default MERN;