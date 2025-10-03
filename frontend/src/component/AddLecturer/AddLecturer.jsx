import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AddLecturer = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [sub, setSub] = useState("");

  const navigate = useNavigate();

  const Submit = async (e) => {
    try {
      e.preventDefault();

      const lecturer = await axios.post("https://class-attendance-1.onrender.com/createLecturer", {
        name,
        password,
        sub,
      });

      console.log("Lecturer ID:", lecturer.data._id);

      navigate("/AdminHome");
    } catch (err) {
      console.error("erroror", err);
    }
  };

  return (
    <div className="lecturer-container">
      <h2 className="title">Add New Lecturer</h2>
      <form className="lecturer-form" onSubmit={Submit}>
        <div className="form-group">
          <label>Lecturer's Name</label>
          <input
            type="text"
            placeholder="Enter lecturer name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Create Login Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <select
            value={sub}
            onChange={(e) => setSub(e.target.value)}
            required
          >
            <option value="">Select subject here</option>
            <option value="SE">Software Engineering</option>
            <option value="MERN">MERN</option>
            <option value="DIP">Digital Image Processing</option>
            <option value="LAMP">LAMP Technology</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddLecturer;
