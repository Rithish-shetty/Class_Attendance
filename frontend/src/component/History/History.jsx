import React, { useEffect, useState } from "react";
import HTable from "../Table/HTable";
import axios from "axios";
import { useParams } from "react-router-dom";

const History = () => {

    const [student , setStudent] = useState([])

    const {att} = useParams()
    const {name} = useParams()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/history/${att}/${name}/${id}`)
        .then(result => setStudent(Array.isArray(result.data)? result.data : [result.data]))
        .catch(err => console.log(err))
    }, [])

    console.log("student in hist" , student)

    return (
        <HTable value={student} dName={name} att={att} />
    )
}

export default History;