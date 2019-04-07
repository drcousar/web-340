/*
============================================
; Title:  cousar-assignment-7.3.js
; Author: Don Cousar
; Modified By: Don Cousar
; Date:   7 April 2019
; Description: TDD With Mocha & Chai
;===========================================
*/
// start program

//Call Header Info
var header = require('../../../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 7.3"));
console.log('\n');

//Link test to functions
var fruits = require("../cousar-fruits");

//Call Chai
var chai = require("chai");
var assert = chai.assert;

//Test 1:  Fruit Array
describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});