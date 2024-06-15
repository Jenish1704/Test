var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"c2.html"}));
app.post("/next",(req,res)=>{
    res.cookie("firstname",req.body.firstname);
    res.cookie("lastname",req.body.lastname);
    res.cookie("password",req.body.password);
    res.redirect("/admin");
});
app.get("/admin",(req,res)=>{
    res.clearCookie("lastname");
    res.write("First Name:" +req.cookies.firstname);
    res.write("Last Name:" +req.cookies.lastname);
    res.write("Password:" +req.cookies.password);
    res.send();
});
app.listen(7009);