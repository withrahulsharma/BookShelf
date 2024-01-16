import "./App.css";
import React, { useState } from "react";
import BookSearch from "./Components/BookSearch";
import BookDisplay from "./Components/BookDisplay";
import { StyledEngineProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [books, setBooks] = useState([]);
  const [newAddition, setNewAddition] = useState(false);

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <div>
          <h1>Book Shelf</h1>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <BookSearch
                setNewAddition={setNewAddition}
                newAddition={newAddition}
                setBooks={setBooks}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <BookDisplay
                setNewAddition={setNewAddition}
                newAddition={newAddition}
                books={books}
              />
            </Item>
          </Grid>
          {/* <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid> */}
        </Grid>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
