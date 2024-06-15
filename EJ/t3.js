var express = require("express");
var app = express();
var path=require("path");
var p=path.join(__dirname);
app.use("/t1",express.static(p,{index:'t3.html'}));
app.get('/data1',(req,res)=>{
    res.set("content-type","text/html")
    t3=(req.query.msg).split(".");
    for(i in t3){
        res.write(t3[i]+"</br>")
    }
    res.send();
});
app.listen(5014);