import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { name, password })
      .then((result) => {
        console.log("result", result.data);
        if (result.data === "success") {
          console.log(result, "Login success");
          navigate("/StdHome");
        } else {
          console.log("mismatch");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">User Login Page</h2>

        <form onSubmit={Submit} className="login-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Enter Name
            </label>
            <input
              type="text"
              name="name"
              className="form-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pass" className="form-label">
              Enter Password
            </label>
            <input
              type="password"
              name="pass"
              className="form-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div className="login-links">
          <Link to="/Register" className="login-link">
            Register
          </Link>
          <Link to="/LectureLogin" className="login-link">
            Login as Lecturer
          </Link>
          <Link to="/adminLogin" className="login-link">
            Login as Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
