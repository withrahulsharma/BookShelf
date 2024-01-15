const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

// Middleware for parsing JSON requests
app.use(express.json());
app.use(cors());
// Database connection
const db = require("./db");
//Data Initialization
const booksModel = require("./models/BooksModel");
booksModel.initializeTable((err, result) => {
  if (err) {
    console.log("Error while initializing Database Tables", err);
  } else {
    console.log("Successfull initialized Database tables", result.changedRows);
  }
});

//Add  Books Routes
const bookRoutes = require("./routes/bookRoutes");
app.use("/api", bookRoutes);
//Add User Routes --> Future
//const userRoutes = require("./routes/userRoutes");
//app.use("/api", userRoutes);

//Testing Routes
app.get("/", (req, res) => {
  res.json("Hello from books-express-server backend");
});

//Adding Express Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
