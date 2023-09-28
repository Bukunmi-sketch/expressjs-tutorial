var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

// var things = require("./things.js");
// app.use("/things", things);

// app.use(function(req,res, next){
//     console.log("start");
//     next();
// });

// app.get("/", function(req, res, next){
//     res.send("Middle");
//     next();
// })

// app.use("/", function(req, res){
//     console.log("end");
// })

app.get("*", function(req,res){
    res.send("invalid url");
})



app.listen(3000);