/*
============================================
; Title:  Assignment 1.3
; Author: Don Cousar
; Date:   23 Feb 2019
; Description: This program demonstrates the
;   use of Modules
;===========================================
*/ 
var url = require("url");

var parsedURL = url.parse("https://www.google.com/profile?name=cousar");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);