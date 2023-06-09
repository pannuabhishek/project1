/*
  File: server.ejs
  Student's Name:Abhishek Pannu
  Student ID: 301275341
  Date: 06/06/2023
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(7000);
module.exports = app;

console.log('Server running at http://localhost:7000/');
