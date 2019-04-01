/*
============================================
; Title:  EMS Project
; Author: Don Cousar
; Date:   31 March 2019
; Description: EMS Project
;===========================================
*/
// start program

//Call Header Info
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","EMS Project"));
console.log('\n');

//Require Libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

//Handle Views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//Home Page Route
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home Page"
    });
});

//About Route - may replace as I progress with content
app.get("/about", function (request, response) {
    response.render("index", {
        title: "About Page"
    });
});

//Contact Route - may replace as I progress with content
app.get("/contact", function (request, response) {
    response.render("index", {
        title: "Contact page"
    });
});

//Start http server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});