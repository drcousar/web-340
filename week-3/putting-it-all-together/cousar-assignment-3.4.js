/*
============================================
; Title:  cousar-assignment.js
; Author: Donald Cousar
; Date:   10 March 2019
; Description:Putting it all together
;===========================================
*/

// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 3.4"));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

// Define "views" directory
app.set("views", path.resolve(__dirname, "views"));

// Use the EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(req,res){
    res.render("index", {
        message: "Home Page"
    });
});

app.get("/about", function(req,res){
    res.render("about", {
        message: "About Page"
    });
});

app.get("/contact", function(req, res){
    res.render("contact", {
        message: "Contact Page"
    });
});

app.get("/products", function(req,res){
    res.render("products", {
        message: "Products Page"
    });
});

// Creates app on 8080
http.createServer(app).listen(8080, function(){
    console.log("\nApp started on 8080");
});