/*
============================================
; Title:  Assignment 3.2
; Author: Don Cousar
; Date:   10 Mar 2019
; Description: This program demonstrates the
;   use of Logging
;===========================================

*/

// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 3.2"));
console.log('\n');

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views")); 
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine
app.use(logger("short"));
app.get("/", function (request, response) {
    response.render("index", {
        message: "Welcome to the Morgan Logger Example!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});
