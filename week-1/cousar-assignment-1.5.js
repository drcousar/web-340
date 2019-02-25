/*
============================================
; Title:  Assignment 1.5
; Author: Don Cousar
; Date:   24 Feb 2019
; Description: This program demonstrates Node Server
;===========================================

 Expected output:

 Hello World

*/

// start program

//Call Header Info
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 1.5"));
console.log('\n');

//Variable declaration:
var http = require("http");
function processRequest(req, res) {

var body = "Hello World";
    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);

//end program