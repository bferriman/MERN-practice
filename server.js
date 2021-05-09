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

const databaseUrl = "MERN-practice";
const collections = ["games"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
})

app.post("/api/games", (req, res) => {
  const newGame = req.body;
  console.log(newGame);
  db.games.insert(newGame, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});