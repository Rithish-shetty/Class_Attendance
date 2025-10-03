import React, { useEffect, useState } from "react";
import Table from "../../Table/Table";
import axios from 'axios';

const DIP = () => {

    const [student , setStudent] = useState([])

    const [selectedDate , setSelectedDate] = useState("")

    const arr = []

    console.log("Student" , student )

    useEffect(() => {
        axios.get("https://class-attendance-1.onrender.com/getStudent")
        .then(item => setStudent(item.data))
        .catch(err => console.log(err))
    }, [])

    const update = async() => {
        try{
            const add  = await axios.put("https://class-attendance-1.onrender.com/dip/add/"+arr)
            console.log(add.data)

            const dipDate = await axios.put("https://class-attendance-1.onrender.com/dipDate/add/"+arr , {selectedDate})
            console.log(dipDate.data)

            arr.length = 0
            window.location.reload()
        }
        catch(err){
            console.error("erorororor" , err)
        }
        
    }

    const remove = (id) => {
        axios.put("https://class-attendance-1.onrender.com/remove/"+id)
        // window.location.reload()
    }

    const getDetails = (id) => {
        console.log("details ID:" , id)
        axios.get("https://class-attendance-1.onrender.com/getDetails/"+id)
        .then(result => arr.push(result.data._id))
        .catch(err => console.log(err))
        console.log("aarr" , arr)
    }

    const dateFunc = (date) => {
        setSelectedDate(date)
    }
    
    const noOfClass = (totalClass) => {
        console.log("total class in lamp" , totalClass)
        axios.put("https://class-attendance-1.onrender.com/dip_total" , {totalClass})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        window.location.reload()
    }

    return(
        <div>
            <Table value = {student} subName={"DIP"} onRemove={remove} Sub={update} present={getDetails} sub="dip" 
            sName = {"dip_date"}  att = {"dip_present"} subjectName={"dip_date"}
            btnName = {"Present"}
            sendDate = {dateFunc}
            addClass = {(e) => {
                e.preventDefault();
                axios.put("https://class-attendance-1.onrender.com/dipDate/addClass")
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }}
            removeClass = {(e) => {
                e.preventDefault();
                axios.put("https://class-attendance-1.onrender.com/dipDate/removeClass")
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }}
            totalClass = {"dip_total"}
            noOfClass = {noOfClass}
            />
        </div>
    );
}

export default DIP;
