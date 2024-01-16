const express = require("express");
const router = express.Router();
const bookModel = require("../models/booksModel");

// Get all users
router.post("/getbooks", (req, res) => {
  console.log(`POST /getbooks`);
  const filter = req.body;
  //console.log("Getting Books filter Data", filter);
  bookModel.getBooks(filter, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    //console.log(results);
    res.json(results);
  });
});

router.post("/book", (req, res) => {
  console.log(`POST /book`);
  const newBook = req.body;
  //do checks for parameters
  if (!newBook.author) {
    res.status(400).json({ error: "Author field can't be empty" });
    return;
  }
  if (!newBook.title) {
    res.status(400).json({ error: "Title field can't be empty" });
    return;
  }
  bookModel.addBook(newBook, (err, result) => {
    if (err) {
      console.error("Error creating Books:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    res
      .status(200)
      .json({ message: "Book added successfully", userId: result.insertId });
  });
});

module.exports = router;
