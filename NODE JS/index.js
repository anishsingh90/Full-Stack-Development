const express = require("express");
const app = express();

app.get("", (req, resp) => {
  console.log("data sent by browser", req.query.name);
  resp.send("Welcome, this is Home Page");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome, this is About Page");
});

app.get("/help", (req, resp) => {
  resp.send("Welcome, this is Help Page");
});

app.listen(5000);
