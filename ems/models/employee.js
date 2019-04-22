/*
============================================
; Title:  employee.js
; Author: Griselda Balmaceda
; Date:   07 April 2019
; Description: File for the Employee database model
;===========================================
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//employee scheema
let EmployeeSchema = new Schema({
    name:{type:String,required:true},
 
})

//exporting model 
module.exports= mongoose.model('Employee', EmployeeSchema)