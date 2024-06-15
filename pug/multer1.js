const express = require("express");
const multer = require("multer");
const app = express();
app.use(express.static(__dirname,{index:"multer.html"}))
const store=multer.diskStorage({
    destination:"/upload",
    filename:function(req,file,cb){
    cb(null,file.originalname)
    console.log(file);
}});
var maxsize=1024*1024*1024;
var upload=multer({
    storage:store,
    limits:{fileSize:maxsize}
});
app.post("/data",upload.single("mypic"),(req,res)=>{
    const file=req.file;
    if(file){
        res.send("<h1>file<span style='color:red'>" + file.originalname + "has been uploaded in "+file.destination+"</span></h1>")
    }
});
app.listen(7001);