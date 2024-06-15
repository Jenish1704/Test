var express = require("express");
var app = express();
app.use(express.static(__dirname,{index:"m2.html"}));
app.use(express.urlencoded({extended:false}));
app.post("/login",(req,res,next)=>{
    res.set("content-type","text/html");
    res.write("<h1>welcome " + req.body.uname + "<h1>");
    res.write("<h3>Email id is " + req.body.email + "<h3>");
    next();
})
app.post("/login",(req,res)=>{
    if(req.body.newsletter=="on"){
        res.write("<h3>Thank You</h3><a href='/'>Logout</a>") ;
    }
    else{
        res.write("<h3>You can subscribe</h3><a href='/subscribe'>Subscribe</a>");
    }
    res.send();
});
app.get("/subscribe",(req,res)=>{
    res.set("content-type","text/html");
    res.send("<h3>Thank You!</h3><a href='/'>Log Out</a>");
});
app.listen(7002);