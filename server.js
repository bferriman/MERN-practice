const express = require("express");
const mongojs = require("mongojs");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.post("/api/games", (req, res) => {
  const newGame = req.body;
  console.log(newGame);
  res.json(newGame);
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});