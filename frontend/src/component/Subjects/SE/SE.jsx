import React, { useEffect, useState } from "react";
import Table from "../../Table/Table";
import axios from 'axios';

const SE = (props) => {

    const [student , setStudent] = useState([])

    const [selectedDate , setSelectedDate] = useState();

    const arr = []

    console.log("Student" , student )

    console.log("Date from se" , selectedDate)

    useEffect(() => {
        axios.get("http://localhost:3001/getStudent")
        .then(item => setStudent(item.data))
        .catch(err => console.log(err))
    }, [])

    const update = async() => {
        try{
            const add  = await axios.put("http://localhost:3001/add/"+arr)
            console.log(add.data)

            const seDate = await axios.put(`"http://localhost:3001/seDate/add/"${arr} `, {selectedDate})
            console.log(seDate.data)

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
        console.log("total class in se" , totalClass)
        axios.put("http://localhost:3001/se_total" , {totalClass})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        window.location.reload()
    }
    
    return(
        <div>
            <Table value = {student} subName={"SE"} onRemove={remove} Sub={update} present={getDetails} sub="se" subjectName={"se_date"} 
            sName = {"se_date"}  att = {"se_present"}
            btnName = {"Present"}
            sendDate = {dateFunc}
            addClass = {(e) => {
                e.preventDefault();
                axios.put("http://localhost:3001/seDate/addClass")
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }}
            removeClass = {(e) => {
                e.preventDefault();
                axios.put("http://localhost:3001/seDate/removeClass")   
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                window.location.reload()
            }}
            totalClass = {"se_total"}
            noOfClass = {noOfClass}
            />
        </div>
    );
}

export default SE;