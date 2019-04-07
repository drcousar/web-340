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
var Employee = require("./models/employee");
var mongoose = require("mongoose");

//MongoDB connection
var mongoDB="mongodb+srv://admin:admin@cluster0-zttjc.mongodb.net/test?retryWrites=true";

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

//Connect to MongoDB

mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MondoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//Employee Model
var employee = new Employee({
    firstname: "Don",
    lastName: "Cousar"
});

//Start http server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});