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
  console.log('middle 1st chala');
  next();
});

app.use(function (req,res,next) {
  console.log('m iddle wher 2st time chala');
  next();
});

app.get('/',function (req, res,next) {
  res.send("No Rout page ha ya")
});

app.get('/about', function(req,res) {
  res.send("<h1>about page ha ya<h1>")
});

app.get('/profile', function(req,res,next) {
  return next(new Error("Some think went rong"))
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);
  
