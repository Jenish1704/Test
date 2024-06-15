// routing
var express = require("express");
var app = express();
app.get("/a", (req, res) => {
    res.set("content-type", "text/html");
    // res.write("Hello");
    res.send("<h1>Hello</h1>");
});
// app.listen(5003,()=>console.log("server started"));


// var express=require("express");
// var app=express();
app.get("/c", (req, res) => {
    res.set("content-type", "text/html");
    // res.write("Hello");
    res.send("<h1>Hiii</h1>");
});
// app.listen(5003,()=>console.log("server started"));


// var express=require("express");
// var app=express();
app.get("/b", (req, res) => {
    res.set("content-type", "text/html");
    // res.write("Hello");
    res.send("<h1>Hey!</h1>");
});
app.listen(5005, () => console.log("server started"));

