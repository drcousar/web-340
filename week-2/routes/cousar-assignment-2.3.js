/*
============================================
; Title:  Assignment 2.3
; Author: Don Cousar
; Date:   3 Mar 2019
; Description: This program demonstrates Express Routes
;===========================================
*/

// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 2.3"));
console.log('\n');

//call Express & Http
var express = require("express");
var http = require("http");
var app = express();

//Set up routes
app.get("/", function(request, response) {
    response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
    response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
    response.end("Welcome to the contact page!");
});

//handle page not found error code
app.use(function(request, response) {
    response.statusCode = 404;
    response.end("404");
});

//start web server
http.createServer(app).listen(8080);

//end program