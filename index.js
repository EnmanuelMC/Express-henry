const http = require("http");
//port para heroky
const port = parseInt(process.env.PORT) || 3074;
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

server.listen(port, () => {
  console.log("Servidor operando en puerto 3000");
});
