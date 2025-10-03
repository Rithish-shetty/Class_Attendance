import React, { useEffect, useState } from "react";
import Table from "../../Table/Table";
import axios from 'axios';

const LAMP = () => {

    const [student , setStudent] = useState([])

    const [selectedDate , setSelectedDate] = useState("")

    const arr = []

    console.log("Student" , student )

    useEffect(() => {
        axios.get("https://class-attendance-9e04.onrender.com/getStudent")
        .then(item => setStudent(item.data))
        .catch(err => console.log(err))
    }, [])

    const update = async() => {
        try{
            const add  = await axios.put("https://class-attendance-9e04.onrender.com/lamp/add/"+arr)
            console.log(add.data)

            const lampDate = await axios.put("https://class-attendance-9e04.onrender.com/lampDate/add/"+arr , {selectedDate})
            console.log(lampDate.data)

            arr.length = 0
            window.location.reload()
        }
        catch(err){
            console.error("erorororor" , err)
        }
        
    }

    const remove = (id) => {
        axios.put("https://class-attendance-9e04.onrender.com/remove/"+id)
        // window.location.reload()
    }

    const getDetails = (id) => {
        console.log("details ID:" , id)
        axios.get("https://class-attendance-9e04.onrender.com/getDetails/"+id)
        .then(result => arr.push(result.data._id))
        .catch(err => console.log(err))
        console.log("aarr" , arr)
    }

    const dateFunc = (date) => {
        setSelectedDate(date)
    }

    const noOfClass = (totalClass) => {
        console.log("total class in lamp" , totalClass)
        axios.put("https://class-attendance-9e04.onrender.com/lamp_total" , {totalClass})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        window.location.reload()
    }

    
    return(
        <div>
            <Table value = {student} subName={"LAMP"} onRemove={remove} Sub={update} present={getDetails} sub="lamp" 
            sName = {"lamp_date"}  att = {"lamp_present"} subjectName={"lamp_date"}
            btnName = {"Present"}
            sendDate = {dateFunc}
            addClass = {(e) => {
                e.preventDefault();
                axios.put("https://class-attendance-9e04.onrender.com/lampDate/addClass")
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }   }
            removeClass = {(e) => {
                e.preventDefault();
                axios.put("https://class-attendance-9e04.onrender.com/lampDate/removeClass")
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }}
            totalClass = {"lamp_total"}
            noOfClass = {noOfClass}
            />        </div>
    );
}

export default LAMP;
