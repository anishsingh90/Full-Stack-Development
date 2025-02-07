const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Welcome, this is Home Page");
});

app.get("/about", (req, res) => {
  res.send("Welcome, this is About Page");
});

app.get("/help", (req, res) => {
  res.send("Welcome, this is Help Page");
});

app.listen(5000);
