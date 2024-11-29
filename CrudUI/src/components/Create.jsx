import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../css/home.css";
import Header from "./Header";
import Retrieve from "./Retrieve";

const Create = () => {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/create", {
        name,
        age,
        email,
      });
      setStatus(true);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  if (status) {
    window.location.reload();
  }

  return (
    <div className="main">
      <h1>Create Users</h1>
      <form action="post">
        <TextField
          className="input"
          fullWidth
          label="Name"
          id="fullWidth"
          margin="dense"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className="input"
          fullWidth
          label="Age"
          id="fullWidth"
          margin="dense"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          className="input"
          fullWidth
          label="Email"
          id="fullWidth"
          margin="dense"
          placeholder="Enter your Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          sx={{ m: 2 }}
          type="submit"
          onClick={handleCreate}
          className="btn"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Create;
