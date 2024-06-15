var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.get("/", (req, res) => {
    res.cookie("name", "express js");
    res.cookie("fname", "ABC");
    res.cookie("lname", "XYZ");
    res.cookie("ID", "23", { expires: new Date(Date.now() + 10000) });
    res.cookie("email", "express@gmail.com", { maxAge: 3000 });
    // res.clearCookie("fanme");
    res.send(req.cookies);
});
app.listen(7005);