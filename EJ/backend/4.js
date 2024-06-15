const express=require("express")
const app=express();
const path=require("path");
const p=path.join(__dirname,"../");
app.use("/home",express.static(p,{index:"1.html"}));
app.listen(5011);