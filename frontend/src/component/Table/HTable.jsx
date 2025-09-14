import React from "react";

const HTable = (props) => {
    
    return (
        <div className="container">
            <h1 className="heading">Attendance History</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr border="1">
                        <td>Name</td>
                        <td>Register No</td>
                        <td>Date</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {props.value?.map((item) => {
                        return(
                    <tr key={item.docId}>
                        <td>{item.name}</td>
                        <td>{item.regNo}</td>
                        
                        <td>
                        {item[props.dName]?.map((i , index) => {
                            return(
                            <h6>{i}</h6>
                            )
                        })}</td>
                        <td>
                        {item[props.att]?.map((i) => {
                            return(
                                <h6>{i}</h6>
                            )
                        })}
                        </td>
                    </tr>
                  ) }) }
                </tbody>
            </table>
        </div>
    )
}

export default HTable;