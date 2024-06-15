// METHOD-1
var express = require("express");
var app = express();
const cb=(req,res,next)=>{
    console.log("started");
    res.set("content-type","text/html");
    res.write("<h1>Hello</h1>");
    next();
}
const cb1=(req,res,next)=>{
    res.write("Addition\n" + (5+5 ));
    res.write("\nsecond time\n");
    next();
}
app.use("/abc",cb,cb1);
app.get("/abc",(req,res)=>{
    res.write("Hello World")
    res.send();
});


// METHOD-2

app.use("/xyz",(req,res,next)=>{
    console.log("requested on " + new Date());
    next();
},
(req,res,next)=>{
    res.set("content-type","text/html")
    res.write("<h1>Second method</h1>")
    next();
},
(req,res)=>{
    res.write("Hiii");
    res.send();
});
app.listen(7001);