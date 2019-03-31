/*
============================================
; Title:  cousar-assignment-6.3.js
; Author: Don Cousar
; Modified By: Don Cousar
; Date:   31 March 2019
; Description: Mongoose DB Connection
;===========================================
*/
// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 6.3"));
console.log('\n');

// Instantiate variables
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose=require("mongoose");
var mongoDB="mongodb+srv://admin:admin@cluster0-zttjc.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

//Attempt connection to db
mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connected error: "));
    db.once("open", function() {
        console.log("Application connected to mLab MongoDB instance");
    });

var app = express();
app.use(logger('dev'));

//start http server
http.createServer(app).listen(8080, function(){
    console.log('Application started and listening on port 8080')
});