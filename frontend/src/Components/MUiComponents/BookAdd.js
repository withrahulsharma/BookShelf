import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/";

import axios from "axios";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props) {
  const [author, setAuthor] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [publishedDate, setPublishedDate] = React.useState("");
  const [available, setAvailable] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }
  function handleGenreChange(e) {
    setGenre(e.target.value);
  }
  function handlePublishedDateChange(e) {
    setPublishedDate(e.target.value);
  }
  function handleAvailableChange(e) {
    setAvailable(e.target.value);
  }
  async function handleAddBook() {
    if (title.length == 0 || author.length == 0) {
      alert("Title/Author cannot be empty String");
    } else {
      const data = { author, title, publishedDate, available, genre };
      const response = await axios
        .post("http://localhost:4000/api/book", data)
        .then((res) => {
          alert("Book Added successfully", res.data);
          console.log("Book Added successfully", res);
          props.setNewAddition(true);
          handleClose();
        });
    }
  }
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Book
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Add Books
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Grid container spacing={2}>
              <Grid container>
                <Grid item xs={6}>
                  Title
                </Grid>

                <Grid item>
                  <TextField
                    size="small"
                    onChange={handleTitleChange}
                    id="outlined-basic"
                    /* label="Outlined" */
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  Author
                </Grid>

                <Grid item>
                  <TextField
                    size="small"
                    onChange={handleAuthorChange}
                    id="outlined-basic"
                    /* label="Outlined" */
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  Genre
                </Grid>
                <Grid item>
                  <TextField
                    size="small"
                    onChange={handleGenreChange}
                    id="outlined-basic"
                    /* label="Outlined" */
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  PublishedDate
                </Grid>
                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="Basic date picker" />
                    </DemoContainer>
                  </LocalizationProvider>

                  {/* <TextField
                  size="small"
                  onChange={handlePublishedDateChange}
                  id="outlined-basic"
                  variant="outlined"
                /> */}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <Checkbox {...label} defaultChecked />
                  {/* Available
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  onChange={handleAvailableChange}
                  id="outlined-basic"
                  variant="outlined"
                /> */}
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddBook}>Add</Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </React.Fragment>
  );
}
