const express = require('express');
const server = express();
  
// const server = http.createServer((req, res) => {
//   res.end("Welcome to Express JS");
// });

server.get('/', (req, res) => {
  res.send("Geee Jinab.......");
});

// server.listen(4000, () => { 
//   console.log("http://localhost:4000");
//  });