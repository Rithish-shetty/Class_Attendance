import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Table.css";

const Table = (props) => {
  const [present, setPresent] = useState([]);
  const [totalClass, setTotalClass] = useState(0);
  const [selectedDate, setSelectedDate] = useState();

  console.log(selectedDate, ": Selected Date");
  console.log(present, "value from table");

  return (
    <div className="table-container">
      <h1 className="table-heading">{props.subName}</h1>

      <div className="table-controls">
        <div className="date-section">
          <h6>Select Date*</h6>
          <DatePicker
            placeholderText="Select date here"
            selected={selectedDate}
            onChange={(e) => setSelectedDate(e)}
            dateFormat="dd/MM/yyyy"
          />
          <button
            className="btn-b"
            onClick={() => props.sendDate(selectedDate)}
          >
            OK
          </button>
        </div>

        <div className="class-section">
          <input
            type="number"
            name="totalClass"
            placeholder="Number of Classes"
            onChange={(e) => setTotalClass(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => props.noOfClass(totalClass)}
          >
            Set
          </button>
          <button className="btn" onClick={props.removeClass}>
            -1 Class
          </button>
          <button className="btn" onClick={props.addClass}>
            +1 Class
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>{props.subName}</th>
            <th>Attendance</th>
            <th>Total Class</th>
          </tr>
        </thead>
        <tbody>
          {props.value?.map((item) => (
            <tr key={item._id}>
              <td>{item.regNo}</td>
              <td>{item.name}</td>
              <td>
                {present[item._id] ? "Present" : "Absent"} <br />
                {item[props.sub]}
              </td>
              <td>
                {selectedDate ? (
                  <div>
                    <button
                      className="btn-b"
                      onClick={() => {
                        setPresent((prev) => ({
                          ...prev,
                          id: item._id,
                          [item._id]: true,
                        }));
                        props.present(item._id);
                      }}
                    >
                      +
                    </button>

                    <button
                      className="btn-b"
                      onClick={() => {
                        props.onRemove(item._id);
                        setPresent((prev) => ({
                          ...prev,
                          id: item._id,
                          [item._id]: false,
                        }));
                      }}
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <h6>Please select date</h6>
                )}
                <br />
                <Link
                  to={`/History/${props.att}/${props.sName}/${item._id}`}
                  className="history-link"
                >
                  History
                </Link>
              </td>
              <td>
                {item[props.sub]}/{item[props.totalClass]} ={" "}
                {(
                  (item[props.sub] / item[props.totalClass]) *
                  100
                ).toFixed(2)}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDate ? (
        <div className="footer-buttons">
          <button className="btn-b" onClick={props.Sub}>
            Done
          </button>
          <button
            className="btn-b"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </button>
        </div>
      ) : (
        <h6>Please select date</h6>
      )}
    </div>
  );
};

export default Table;
