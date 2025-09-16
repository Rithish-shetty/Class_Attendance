import React from "react";
import { Link } from "react-router-dom";
import "./AdminHome.css";

const AdminHome = () => {
  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2 className="admin-title">Admin Dashboard</h2>

        <div className="admin-links">
          <Link to="/AddLecturer" className="admin-link">
            Add Lecturer
          </Link>
          <Link to="/AddStd" className="admin-link">
            Add Students
          </Link>
          <Link to="/SE" className="admin-link">
            SE
          </Link>
          <Link to="/MERN" className="admin-link">
            MERN
          </Link>
          <Link to="/DIP" className="admin-link">
            DIP
          </Link>
          <Link to="/LAMP" className="admin-link">
            LAMP
          </Link>
          <Link to="/DeleteStd" className="admin-link">
            Delete Students
          </Link>
          <Link to="/DeleteLecturer" className="admin-link">
            Delete Lecturer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
