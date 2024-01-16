import React, { useState } from "react";
import { AddIcon } from "./MUiComponents/Avtar";
import BookTable from "./MUiComponents/BookTable";
import BookCard from "./MUiComponents/BookCard";
import Grid from "@mui/material/Grid";
import { height } from "@mui/system";

function BookDisplay(props) {
  const displayedBook = {
    title: ".",
  };
  return (
    <div>
      <Grid container></Grid>
      <div>
        {/* Book Display Aea <LetterAvatars /> */}
        {props.books ? (
          props.books.length >= 1 ? (
            <BookCard
              setNewAddition={props.setNewAddition}
              style={{ width: "100%" }}
              title={props.books[0].Title}
            />
          ) : null
        ) : null}
      </div>
      <div>
        <BookTable books={props.books} />
      </div>
    </div>
  );
}

export default BookDisplay;
