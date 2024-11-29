import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../css/home.css";
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios(`http://localhost:3000/edit/${id}`);
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [id]);

  const updateData = async () => {
    try {
      const result = await axios.put(
        `http://localhost:3000/update/${id}`,
        data
      );
      alert("data updated ");
      console.log(result);
      // setData(result.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="update
      "
      >
        <h1>User's Detail:</h1>
        <form>
          <TextField
            fullWidth
            label="Name"
            id="fullWidth"
            name="name"
            margin="dense"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <TextField
            fullWidth
            label="Age"
            id="fullWidth"
            name="age"
            margin="dense"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            margin="dense"
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Button
            sx={{ m: 2 }}
            onClick={() => {
              navigate("/");
            }}
            variant="outlined"
          >
            Back to Home
          </Button>
          <Button sx={{ m: 2 }} variant="contained" onClick={updateData}>
            Update
          </Button>
        </form>
      </div>
    </>
  );
};

export default Update;
