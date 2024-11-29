import React, { useEffect, useState } from "react";
import "../css/home.css";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import { red } from "@mui/material/colors";
import axios from "axios";

const Retrieve = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  useEffect(() => {
    const getDoc = async () => {
      try {
        const result = await axios("http://localhost:3000/getAll");
        setData(result.data);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    getDoc();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const result = await axios.delete(`http://localhost:3000/delete/${id}`);
    setStatus(true);
    const newdata = data.filter((item) => {
      console.log(item);
      item.id !== id;
    });
    setData(newdata);
  };

  if (status) {
    return <Retrieve />;
  }

  return (
    <>
      <div className="retrieve">
        <h1>Lists </h1>
        <div className="table">
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  {/* <TableCell></TableCell> */}
                  <StyledTableCell align="right">Id</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Age</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell align="right">{i + 1}</TableCell>
                    <TableCell align="right">{item.name}</TableCell>
                    <TableCell align="right">{item.age}</TableCell>
                    <TableCell align="right">{item.email}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit" placement="bottom">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleEdit(item._id);
                          }}
                        >
                          <EditIcon color="primary" />
                        </button>
                      </Tooltip>
                      <Tooltip title="Delete" placement="bottom">
                        <button onClick={() => handleDelete(item._id)}>
                          <DeleteIcon sx={{ color: red[700] }} />
                        </button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Retrieve;
