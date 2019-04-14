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
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

//setup CSRF Protection
var csrfProtection = csrf({cookie: true});

//MongoDB connection
var mongoDB="mongodb+srv://admin:admin@cluster0-zttjc.mongodb.net/test?retryWrites=true";

//Handle Views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(cookieParser());
app.use(csrfProtection);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
    console.log(token);
});

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

app.get("/new", function (request, response) {
    response.render("new", {
        title: "New Employee"
    });
});

app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    response.redirect("/");
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