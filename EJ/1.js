const express=require("express")
const app=express();
app.use(express.static(__dirname,{index:"1.html"}));
app.listen(5010);