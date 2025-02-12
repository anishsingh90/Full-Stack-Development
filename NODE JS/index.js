const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send("<h1>Welcome, this is Home Page</h1>");
});

app.get("/about", (req, resp) => {
  resp.send(`
    <input type="text" placeholder="User name!"/>
    <button>Click Me !</button>
  `);
});

app.get("/help", (req, resp) => {
  resp.send({
    name: "anish",
    email: "ansihraaz90@gmail.com",
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
