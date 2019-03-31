/*
============================================
; Title:  cousar-assignment-5.2.js
; Author: Don Cousar
; Modified By: Don Cousar
; Date:   24 March 2019
; Description: ejs
;===========================================
*/
// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 5.2"));
console.log('\n');

var express = require("express");
var http = require("http");
var path = require("path");

app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//Create list of names
var n = [
  "John",
  "Susan",
  "Don",
  "Sandy"
];

//pass names to ejs
app.get("/", function(request, response) {
    response.render("index", {
        names: n
    })
});

//start http server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

//End Program