/*
============================================
; Title:  EMS Project
; Author: Don Cousar
; Date:   31 March 2019
; Description: EMS Project
;===========================================
*/
// start program

//Call Header Info
//var header = require('../cousar-header');
//console.log(header.display("Donald", "Cousar","EMS Project"));
//console.log('\n');

//Require Libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
var Employee = require("./models/employee");
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

//Connect to Mongo DB
var mongoDB = "mongodb+srv://admin:admin@cluster0-zttjc.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
    console.log("Application connected to mLab MongoDB")
});

//Set csrf protection 
var csrfProtection = csrf({
    cookie: true
});

//Set EJS view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

//Instantiate use statements
app.use(logger("short"));
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});
app.use(express.static(__dirname + '/public'));
app.use(helmet.xssFilter());

//Setup Routing
app.get("/", function (req, res) {
    Employee.find({}, function (err, employees) {
        if (err) {
            console.log(err)
            throw err;
        } else {
            console.log(employees);
            res.render('index', {
                title: 'EMS|Home',
                employees: employees
            })
        }
    });
});

//Render Employee List
app.get("/list",function(req,res){
    Employee.find({},function(error,employees){
        if(error)throw error;
        res.render("list",{
            title:'Employee List',
            employee:employees
        })
    })
})

//Render New Employee
app.get("/new", function (request, response) {
    response.render("new", {
        title: 'EMS|New'
    });
});

app.get("/view/:queryName", function (request, response) {
    var queryName = request.params.queryName;
    Employee.find({'name': queryName}, function(error, employees) {
        if (error) throw error;
        console.log(employees);

        if (employees.length > 0) {
            response.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            response.redirect("/list")
        }
    });
});

//Process Employees
app.post("/process", function (req, res) {
    //Get requests data 
    const employeeName = req.body.txtName;
    console.log(employeeName)

    //Employee model
    var employee = new Employee({
        name: employeeName
    });

    //Save employee
    employee.save(function (err) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(employeeName + 'saved');
            res.redirect('/')
        }
    });

})

//creating node web server
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!")
});