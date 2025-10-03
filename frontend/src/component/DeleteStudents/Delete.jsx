import axios from "axios";
import React, { useEffect, useState } from "react";

const DeleteStd = () => {
//windows.location.reload() to reload the page


    const [student , setStudent] = useState([])

    useEffect(() => {
            axios.get("https://class-attendance-9e04.onrender.com/getStudent")
            .then(item => setStudent(item.data))
            .catch(err => console.log(err))
        }, [])

        console.log(student)

    const deletion = async (id) => {
        try{
            const a = await axios.delete("https://class-attendance-9e04.onrender.com/SEModel/delete/" + id)
            console.log("SEModel deleting" , a)

            const b = await axios.delete("https://class-attendance-9e04.onrender.com/DOCModel/delete/" + id)
            console.log("DOCModel deleting" , b)

            window.location.reload()
        }
        catch(error){
            console.error("Erroro in deleting Model :" , error)
        }

        
    }

    return(
        <div className="container">
            <h1>Delete Section</h1>
            <table className="table">
                <thead >
                    <tr className="table-dark">
                        <td>Name</td>
                        <td>Reg No</td>
                        <td>Delete Student</td>
                    </tr>
                </thead>
                <tbody>
                    {student?.map((item) => {
                        return(
                    <tr key = {item._id}>
                        <td>{item.name}</td>
                        <td>{item.regNo}</td>
                        <td><button onClick={() =>deletion(item._id)}>Delete</button></td>
                    </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}

export default DeleteStd;