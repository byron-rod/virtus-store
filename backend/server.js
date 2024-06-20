const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const books = require("./data/books");
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});
app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b._id === req.params.id);
  res.json(book);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
