import axios from "axios";
import React, { useEffect, useState } from "react";

const DeleteLecturer = () => {
//windows.location.reload() to reload the page


    const [Lecturer , setLecturer] = useState([])

    useEffect(() => {
            axios.get("https://class-attendance-9e04.onrender.com/getLecturer")
            .then(item => setLecturer(item.data))
            .catch(err => console.log(err))
        }, [])

        console.log(Lecturer)

    const deletion = async (id) => {
        try{
            const a = await axios.delete("https://class-attendance-9e04.onrender.com/LecturerModel/delete/" + id)
            console.log("LecturerModel deleting" , a)

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
                        <td>Subject Name</td>
                        <td>Delete Student</td>
                    </tr>
                </thead>
                <tbody>
                    {Lecturer?.map((item) => {
                        return(
                    <tr key = {item._id}>
                        <td>{item.name}</td>
                        <td>{item.sub}</td>
                        <td><button onClick={() =>deletion(item._id)}>Delete</button></td>
                    </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}

export default DeleteLecturer;