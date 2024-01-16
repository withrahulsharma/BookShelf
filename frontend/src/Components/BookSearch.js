import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ClassNames } from "@emotion/react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BookSearch(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (props.newAddition) {
      fetchBookSearchData({});
      props.setNewAddition(false);
    }
    fetchBookSearchData({});
  }, [props.newAddition]);
  const fetchBookSearchData = async (data) => {
    const response = await axios.post(
      "http://localhost:4000/api/getbooks",
      data
    );

    props.setBooks(response.data);
    //if(response.data.length == 0)
    console.log("Inside Use Efefct", response.data, data);
  };
  function handleSearchClick() {
    const data = {
      author: author,
      title: title,
      genre: genre,
      sortBy: sortBy,
    };
    const response = fetchBookSearchData(data);
    console.log("Making a backend call for", response.data);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }
  function handleGenreChange(e) {
    setGenre(e.target.value);
  }
  function handleSortByChange(e) {
    setSortBy(e.target.value);
  }
  return (
    <div>
      <h2>Search Books</h2>

      <Box flexGrow={1}>
        <Grid container spacing={2}>
          <Grid /* xs={6} item */ container direction={"column"}>
            <Item>
              <Grid container>
                <Grid item xs={4}>
                  <div className="SearchBoxText">Title</div>
                </Grid>
                <Grid>
                  <TextField
                    size="small"
                    onChange={handleTitleChange}
                    id="outlined-basic"
                    /* label="Outlined" */
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Item>
            <Item>
              <Grid container>
                <Grid item xs={4}>
                  <div className="SearchBoxText">Author</div>
                </Grid>
                <Grid>
                  <TextField
                    size="small"
                    onChange={handleAuthorChange}
                    id="outlined-basic"
                    /* label="Outlined" */
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Item>

            <Item>
              <Grid container>
                <Grid item xs={4}>
                  Genre
                </Grid>
                <Grid>
                  <TextField
                    size="small"
                    onChange={handleGenreChange}
                    id="outlined-basic"
                    /* label="Outlined" */
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Item>
            <Item>
              <Grid container>
                <Grid item xs={4}>
                  <div className="SearchBoxText">Sort By</div>
                </Grid>
                <Grid>
                  <TextField
                    size="small"
                    onChange={handleSortByChange}
                    id="outlined-basic"
                    /* label="Outlined" */
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Item>
            <button onClick={handleSearchClick}>Search</button>
          </Item>
        </Grid>
      </Box>
    </div>
  );
}

export default BookSearch;
