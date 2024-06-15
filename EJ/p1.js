var express = require("express");
var app = express();
app.use(express.urlencoded({tended:false}));
app.use(express.static(__dirname,{index:"p1.html"}));
app.post("/data",(req,res)=>{
    response={fn:req.body.fname};
    res.write(JSON.stringify(req.body));
    res.write("first name:"+response.fn);
    res.send();
});
app.listen(5017)