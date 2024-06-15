var express = require("express");
var app = express();
app.use(express.static(__dirname,{index:"m3.html"}));
app.use(express.urlencoded({extended:false}));
app.post("/login1",(req,res,next)=>{
    res.set("content-type","text/html");
    if(req.body.username=="admin"){
        next();
    }
    else{
        res.write("<h3 style='color:red'>Warning</h3>");
    }
});
app.post("/login1",(req,res)=>{
    res.write("<h3>Welcome... admin</h3>");
    res.send();
});
app.listen(7003);