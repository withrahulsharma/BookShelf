import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable(props) {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (props.books) {
      setRows(props.books);
    }
  }, [props.books]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Available</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{row.Title}</TableCell>
              <TableCell align="right">{row.Author}</TableCell>
              <TableCell align="right">{row.Genre}</TableCell>
              <TableCell align="right">{row.Available}</TableCell>
              <TableCell align="right">{row.Available}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
