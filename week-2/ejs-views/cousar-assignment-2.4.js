/*
============================================
; Title:  Assignment 2.4
; Author: Don Cousar
; Date:   3 Mar 2019
; Description: This program demonstrates Express EJS
;===========================================
*/

// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 2.4"));
console.log('\n');

//call Express & Http
var express = require("express");
var http = require("http");
var app = express();
var path = require("path");

//Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

//Tell Express to use the EJS view engine
app.set("view engine", "ejs");

//Set route
app.get("/", function(request, response) {
    response.render("index", {
        firstName: "Donald",
        lastName: "Cousar",
        address: "123 Main St"
    });
});

//Start Web Server
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});

