const http = require('http');

const server = http.createServer((req, res) {
  res.end("Welcome to Express JS");
});


server.listen(7000), () => {
  console.log("http://localhost:7000");
}