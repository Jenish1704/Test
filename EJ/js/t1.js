const express=require("express")
const app=express();
const path=require("path");
const p1=path.join(__dirname,"../css");
app.use(express.static(p1));
const p2=path.join(__dirname,"../image");
app.use(express.static(p2));
const p3=path.join(__dirname,"../html");
// app.use(express.static(p3,{index:"t1.html"}));
app.get("/",(req,res)=>{
    res.sendFile(p3 + "/t1.html" );
});
app.listen(5013);

// or


