var express = require("express");
var app = express();
student = [
    { name: 'ABC', age: 27 },
    {name:'XYZ',age:30},
    {name:'DEF',age:55}
]
app.get("/", (req, res) => {
    res.write(JSON.stringify(student));
    res.send();
});
app.get("/student1",(req,res)=>{
    a1=student.sort((a,b)=>(b.age-a.age));
    //res.write(a1);
     for(k=0; k<a1.length; k++){
         res.write("<h1>"+a1[k].name+" "+a1[k].age+"</h1>");
     }
    res.send();
});
app.get("/table",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<table border='2px solid'><tr><th>Name</th><th>Age</th></tr>");
    for(i of student){
        res.write("<tr><td>"+i.name+"</td><td>"+i.age+"</td></tr>");
    }
    res.send("</table>");

})
app.listen(5008, () => console.log("server started"));