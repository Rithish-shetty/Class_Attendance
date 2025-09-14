import React, { useEffect, useState } from "react";
import Table from "../../Table/Table";
import axios from 'axios';

const LAMP = () => {

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
            const add  = await axios.put("http://localhost:3001/dip/add/"+arr)
            console.log(add.data)

            const dipDate = await axios.put("http://localhost:3001/dipDate/add/"+arr , {selectedDate})
            console.log(dipDate.data)

            arr.length = 0
            window.location.reload()
        }
        catch(err){
            console.error("erorororor" , err)
        }
        
    }

    const remove = (id) => {
        axios.put("http://localhost:3001/remove/"+id)
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
        console.log("total class in lamp" , totalClass)
        axios.put("http://localhost:3001/dip_total" , {totalClass})
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
                axios.put("http://localhost:3001/dipDate/addClass")
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }}
            removeClass = {(e) => {
                e.preventDefault();
                axios.put("http://localhost:3001/dipDate/removeClass")
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

export default LAMP;
