/*
============================================
; Title:  Assignment 4.2
; Author: Don Cousar
; Date:   17 Mar 2019
; Description: JSON API
;===========================================
*/

// start program

//Call Header Info
var header = require('../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 4.2"));
console.log('\n');

//Default Express Page Instantiation
var express = require("express");
var http = require("http");
var app = express();

app.get("/customer/:id", function(request, response){
    var id = parseInt(request.params.id, 10);
    response.json({
        firstName: "John",
        lastName: "Doe",
        employeeId: id
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});
