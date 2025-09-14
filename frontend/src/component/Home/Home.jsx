import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <Link to={"/AddStd"}>Add stdents</Link><br />
            <Link to={"/SE"}>SE</Link><br />
            <Link to={"/MERN"}>MERN</Link><br />
            <Link to={"/DIP"}>DIP</Link><br />
            <Link to={"/LAMP"}>LAMP</Link><br />
            <Link to={"/DeleteStd"}>Delete students</Link><br />
        </div>
    );
}

export default Home;