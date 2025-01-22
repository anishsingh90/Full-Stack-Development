const http = require("http");

http
  .createServer((res, resp) => {
    resp.write("Anish");
    resp.end();
  })
  .listen(4500);
