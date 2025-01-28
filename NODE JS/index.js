const http = require("http");

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "applicationjson" });
    resp.write(
      JSON.stringify({
        name: "Anish Singh",
        email: "anishraaz90@gmail.com",
      })
    );
    resp.end();
  })
  .listen(5000);
