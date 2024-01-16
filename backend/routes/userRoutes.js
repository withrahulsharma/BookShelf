//

//const express = require("express");
/* const router = express.Router();
const userModel = require("../models/userModel");

// Get all users
router.post("/getbooks", (req, res) => {
  //do some checks for parameters
  //res.json("Hello from Books get");
  const filter = req.body;
  console.log("filter", req.body);
  userModel.getBooks(filter, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});
router.get("/test", (req, res) => {
  //do some checks for parameters
  userModel.getBooks((err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json("Hello from backend");
  });
});
router.post("/book", (req, res) => {
  const newBook = req.body;
  //do some checks for parameters
  if (!newBook.author) {
    res.status(500).json({ error: "Author field can't be empty" });
    return;
  }
  if (!newBook.title) {
    res.status(500).json({ error: "Title field can't be empty" });
    return;
  }
  userModel.addBook(newBook, (err, result) => {
    if (err) {
      console.error("Error creating Books:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res
      .status(201)
      .json({ message: "User created successfully", userId: result.insertId });
  });
});
router.get("/users", (req, res) => {
  console.log("Inside get /users");
  userModel.getAllUsers((err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

// Get user by ID
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  userModel.getUserById(userId, (err, result) => {
    if (err) {
      console.error("Error fetching user:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    if (!result.length) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(result[0]);
  });
});

// Create user
router.post("/users", (req, res) => {
  const newUser = req.body;
  userModel.createUser(newUser, (err, result) => {
    if (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res
      .status(201)
      .json({ message: "User created successfully", userId: result.insertId });
  });
});

// Update user by ID
router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  userModel.updateUser(userId, updatedUser, (err) => {
    if (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json({ message: "User updated successfully" });
  });
});

// Delete user by ID
router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  userModel.deleteUser(userId, (err) => {
    if (err) {
      console.error("Error deleting user:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json({ message: "User deleted successfully" });
  });
});

module.exports = router;
 */
