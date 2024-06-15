// json processing
var express = require("express");
var app = express();
student = { name: 'ABC', age: 27 };
app.get("/j", (req, res) => {
    res.write(JSON.stringify(student));
    res.write(student.age + " ");
    res.send();
});
app.get("/j1", (req, res) => {
    res.send(student.age + " ");
});
app.get("/j2", (req, res) => {
    res.json(student.age);
})

app.listen(5006, () => console.log("server started"));

// res.send ma koi number hoi tyare string ma convert krvu
// res.write ma bdha ma string ma convert krvu
// res.json ma string ma convert krvu compulsary nthi