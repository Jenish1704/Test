var express=require("express");
var app=express();
app.get("/user/:uname/num/:n",(req,res)=>{
    res.send(req.params);
});
app.listen(5009);