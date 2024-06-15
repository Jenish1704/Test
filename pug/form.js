//- //- Write express js script to load student form using pug file which contains following fields Name(text) 
//- Email(email) Course(radio : CE, IT, CSE) Once form submitted then data must be displayed 
//- on ‘/data’ page using pug file. Means data should be submitted from express application to PUG file.

var express = require("express");
var app = express();
 app.set('view engine','pug')
 app.use(express.urlencoded())
 app.get('/',(req,res)=>{
    res.render(__dirname + "/form")
 });
 app.post("/data",(req,res)=>{
    res.render(__dirname + "/output",
        {
            name:req.body.name,
            email:req.body.email,
            course:req.body.course,
        }
    )
 });
 app.listen(9998);