import React, {  useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';

const Table = (props) => {

    const [present , setPresent] = useState([])

    const [totalClass , setTotalClass] = useState(0)

    const [selectedDate , setSelectedDate] = useState();
    console.log(selectedDate , ": Selected Date")

        
    console.log(present , "value from table")

    return (
        <div className="container">
            <h1 className="heading">{props.subName}</h1><br />
            <h6>Select Date*</h6>
            <div style={{display : "flex" , justifyContent : "space-between" , alignItems : "center"}}>
                <div>
            <DatePicker
            placeholderText="Select date here"
            selected={selectedDate}
            onChange={e => setSelectedDate(e)}
            dateFormat='dd/MM/yyyy'
            />
            <button onClick={  props.sendDate(selectedDate)}>OK</button> <br /><br />
            </div>
            <div>
                <div>
                <input type="Number" name="totalClass"
                placeholder="Number of Classes"
                onChange={(e) => setTotalClass(e.target.value)}
                />
                <button onClick={() => props.noOfClass(totalClass)}>Set</button>
            </div>
                <button onClick={props.removeClass}>-1 Class</button>
                <button onClick={props.addClass}>+1 Class</button>
            </div>
            </div>
            <table className="table">
                <thead className="table-dark">
                    <tr border="1">
                        <td>Reg No</td>
                        <td>Name</td>
                        <td>{props.subName}</td>
                        <td>Attendencee</td>
                        <td>Total Class</td>
                    </tr>
                </thead>
                <tbody>
                    {props.value?.map((item) => {
                        return(
                    <tr key = {item._id}>
                        <td>{item.regNo}</td>
                        <td>{item.name}</td>
                        <td>{present[item._id] ? "Present" : "Absent"} <br />
                            {item[props.sub]}</td>
                        <td>
                        <button onClick={() => {    
                            setPresent((prev) => ({...prev ,id : item._id , [item._id] : true }))
                            props.present(item._id)
                        }}>{props.btnName}</button>
                        
                        <button onClick={() => {props.onRemove(item._id)
                            setPresent((prev) => ({...prev ,id : item._id , [item._id] : false }))
                        }}>-</button>
                        <Link to={`/History/${props.att}/${props.sName}/${item._id}`}>History</Link>
                        </td>
                        <td>{item[props.sub]}/{item[props.totalClass]} = {((item[props.sub]/item[props.totalClass]) * 100).toFixed(2)}%</td>
                    </tr>
                     
                    )})}
                </tbody>
            </table>
            {  selectedDate ? (
                <div>
            <button onClick={() => {
                // props.onUpdate(item._id)
                props.Sub()
            }}>Done</button>

            <button onClick={() => {
                window.location.reload()
            }}>Refresh</button>
            </div>
            ) : <h6>Please select date</h6>} 
        </div>
    )
}

export default Table;