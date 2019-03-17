/*
============================================
; Title:  Assignment 4.3
; Author: Don Cousar
; Date:   17 Mar 2019
; Description: Status Codes
;===========================================
*/

// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 4.3"));
console.log('\n');

//Default Express Page Instantiation
var express = require("express");
var http = require("http");
var app = express();

//Page not found error
app.get("/not-found", function(request, response){
    response.status(404);
    response.json({
        error: "Page not found."
    })
});

//Successful Page Load
app.get("/ok", function(request, response){
    response.status(200);
    response.json({
        message:"Successful Page Load"
    })
});

//Server error
app.get("/not-implemented", function(request, response){
    response.status(501);
    response.json({
        error: "Internal Error, page not implemented."
    })
});

//Start server
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

//End Program