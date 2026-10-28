// const http = require('http');

// const server = http.createServer(function (req,res) {
//   res.end("hellow World");
// })  

// server.listen(5000);


// const http = require('http');

// const server = http.createServer(function (req,res) {
//   res.end("Hiii jinab"); 
// })

// server.listen(4000);

import express from 'express'
const app = express()

app.use(function (req,res,next) {
  console.log('middle where is started');
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
