/*
============================================
; Title:  Assignment 3.3
; Author: Don Cousar
; Date:   10 Mar 2019
; Description: This program demonstrates the
;   use of Routing
;===========================================
 
*/

// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 3.3"));
console.log('\n');

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/:productId", function(request, response) {

var productId = parseInt(request.params.productId, 10);
response.render("index", {
    productId: productId
})

});

 http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080");
});

