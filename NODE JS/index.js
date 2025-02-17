const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("/index", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, resp) => {
  resp.render("profile");
});

app.listen(5000);
