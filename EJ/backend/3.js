const express=require("express")
const app=express();
const path=require("path");
const p=path.join(__dirname,"../frontend");
app.use("/home",express.static(p,{index:"3.html"}));
app.listen(5011);