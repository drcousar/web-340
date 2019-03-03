/*
============================================
; Title:  Assignment 2.2
; Author: Don Cousar
; Date:   3 Mar 2019
; Description: This program demonstrates Express
;===========================================

 Expected output:

 Hello World

*/

// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 2.2"));
console.log('\n');

var express = require("express");
var http = require("http");
var app = express();

app.use(function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello World");
});

http.createServer(app).listen(8080);

//end program