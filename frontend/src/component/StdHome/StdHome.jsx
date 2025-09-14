import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const StdHome = () => {
    return(
        <div>
            <Link to='/SEAtt'>SE Attendance Page</Link><br />
            <Link to='/MERNAtt'>MERN Attendance Page</Link><br />
            <Link to='/LAMPAtt'>LAMP Attendance Page</Link><br />
            <Link to='/DIPAtt'>DIP Attendance Page</Link><br />
        </div>
    );
}

export default StdHome;