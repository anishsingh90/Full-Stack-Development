const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Hello this is Anish Singh");
    resp.end();
  })
  .listen(4500);
