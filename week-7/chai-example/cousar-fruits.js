/*
============================================
; Title:  cousar-fruits.js
; Author: Don Cousar
; Modified By: Don Cousar
; Date:   7 April 2019
; Description: TDD with mocha & chai
;===========================================
*/
// start program

//Fruit Function
function fruits(str) {
    return str.split(',');
}

//export fruits into a module
module.exports = fruits;
