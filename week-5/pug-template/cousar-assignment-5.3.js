/*
============================================
; Title:  cousar-assignment-5.3.js
; Author: Don Cousar
; Modified By: Don Cousar
; Date:   24 March 2019
; Description: pug
;===========================================
*/
// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 5.3"));
console.log('\n');

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
var app = express();

//Use pug view / template
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", function(request, response) {
    response.render("index", {
        message: "Never stop coding!"
    });
});

//start http server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

//end program