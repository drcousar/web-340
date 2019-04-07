/*
============================================
; Title:  Mongoose - Employee
; Author: Don Cousar
; Date:   7 April 2019
; Description: Employee Schema
;===========================================
*/
// Start program
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//define employee schema
var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

//define the employee model
var Employee = mongoose.model("Employee", employeeSchema);

//expose employee
module.exports = Employee;

// End Program
