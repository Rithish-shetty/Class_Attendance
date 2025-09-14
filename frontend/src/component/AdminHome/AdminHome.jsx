import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const AdminHome = () => {
    return(
        <div>
            <Link to={"/AddLecturer"}>Add Lecturer</Link><br />
            <Home />
            <Link to={"/DeleteLecturer"}>Delete Lecturer</Link><br />
        </div>
    );
}

export default AdminHome;