import React from "react";
import { Link } from "react-router-dom";
import "./StdHome.css";

const StdHome = () => {
  return (
    <div className="stdhome-container">
      <div className="stdhome-card">
        <h2 className="stdhome-title">Student Dashboard</h2>

        <div className="stdhome-links">
          <Link to="/SEAtt" className="stdhome-link">
            SE Attendance Page
          </Link>
          <Link to="/MERNAtt" className="stdhome-link">
            MERN Attendance Page
          </Link>
          <Link to="/LAMPAtt" className="stdhome-link">
            LAMP Attendance Page
          </Link>
          <Link to="/DIPAtt" className="stdhome-link">
            DIP Attendance Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StdHome;
