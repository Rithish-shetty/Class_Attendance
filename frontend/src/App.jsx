import React from "react";
import Home from "./component/Home/Home";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import DIP from "./component/Subjects/DIP/DIP";
import LAMP from "./component/Subjects/LAMP/LAMP";
import MERN from "./component/Subjects/MERN/MERN";
import SE from "./component/Subjects/SE/SE";
import AddStd from "./component/AddStudents/Add";
import DeleteStd from "./component/DeleteStudents/Delete";
import 'bootstrap/dist/css/bootstrap.min.css';
import History from "./component/History/History";
import Register from "./component/Login/register";
import Login from "./component/Login/login";
import AadminLogin from "./component/Login/adminLogin";
import AdminHome from "./component/AdminHome/AdminHome";
import AddLecturer from "./component/AddLecturer/AddLecturer";
import LecturerLogin from "./component/Login/LecturerLogin";
import DeleteLecturer from "./component/DeleteStudents/DeleteLecturer";
import StdHome from "./component/StdHome/StdHome";
import SEAtt from "./component/Subjects/SE/SEAtt";
import MERNAtt from "./component/Subjects/MERN/MERNAtt";
import LAMPAtt from "./component/Subjects/LAMP/LAMPAtt";
import DIPAtt from "./component/Subjects/DIP/DIPAtt";


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/adminLogin" element={<AadminLogin />}></Route>
        <Route path="/LectureLogin" element={<LecturerLogin />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/AdminHome" element={<AdminHome />}></Route>
        <Route path="/StdHome" element={<StdHome />}></Route>
        <Route path="/DIP" element={<DIP />}></Route>
        <Route path="/DIPAtt" element={<DIPAtt />}></Route>
        <Route path="/LAMP" element={<LAMP />}></Route>
        <Route path="/LAMPAtt" element={<LAMPAtt />}></Route>
        <Route path="/MERN" element={<MERN />}></Route>
        <Route path="/MERNAtt" element={<MERNAtt />}></Route>
        <Route path="/SE" element={<SE />}></Route>
        <Route path="/SEAtt" element={<SEAtt />}></Route>
        <Route path="/AddStd" element={<AddStd />}></Route>
        <Route path="/AddLecturer" element={<AddLecturer />}></Route>
        <Route path="/DeleteStd" element={<DeleteStd />}></Route>
        <Route path="/DeleteLecturer" element={<DeleteLecturer />}></Route>
        <Route path="/History/:att/:name/:id" element={<History />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;