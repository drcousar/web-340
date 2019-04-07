/*
============================================
; Title:  cousar-assignment-7.2.js
; Author: Don Cousar
; Modified By: Don Cousar
; Date:   7 April 2019
; Description: TDD With Mocha & Chai
;===========================================
*/
// start program

//Call Header Info
var header = require('../../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 7.2"));
console.log('\n');

var assert = require("assert");
describe("String#split", function(){
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});