var express = require("express");
var app = express();
 app.set('view engine','pug')
 app.get('/',(req,res)=>{
    res.render(__dirname +"/pug6" , {message:" Hello from LJU" , name:'LJU' , id:2})
 });
 app.listen(5555);