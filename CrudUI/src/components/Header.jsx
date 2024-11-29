import React from "react";
import "../css/home.css";
import Button from "@mui/material/Button";
import Create from "./Create";
import Retrieve from "./Retrieve";

const Home = () => {
  return (
    <>
      <div className="head">
        <h1 className="heading">Crud Application</h1>
        {/* <button className="btn">
          Login
        </button> */}
      </div>
      <Create />
      <Retrieve />
    </>
  );
};

export default Home;
