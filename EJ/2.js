const express=require("express")
const app=express();
app.use(express.static("frontend",{index:"2.html"}));
app.listen(5010);