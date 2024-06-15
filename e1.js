var express=require("express");
var app=express();
app.get("/",(req,res)=>{
    res.set("content-type","text/plain");
    res.write("Hello");
    res.send();
});
app.listen(5001);

// write ma lakhyu hoi toh send empty rakhvu