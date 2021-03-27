const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { ContentType: "aplication/json" });
      //   res.statusCode(200);
      //   res.statusMessage("OK");
      res.end(JSON.stringify("hola mundo"));
      break;
    default:
      res.writeHead(200, { ContentType: "text/plain" });
      res.end("No encontrado");
  }
});

server.listen(3000, () => {
  console.log("Servidor operando en puerto 3000");
});
