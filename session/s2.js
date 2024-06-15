var express=require("express");
var app=express();
var es=require("express-session");
app.use(es({secret:'LJU123'}));
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"s2.html"}));
app.post("/savesession",(req,res)=>{
    req.session.name=req.body.name;
    req.session.pass=req.body.pass;
    res.redirect("/fetchsession");
});
app.get("/fetchsession",(req,res)=>{
    res.send("<h1>welcome "+ req.session.name + "</h1><a href='/deletesession'>log out</a>")
});
app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.redirect('/next');
});
app.get("/next",(req,res)=>{
    res.send("welcome " + req.session.name);
})
app.listen(8989);