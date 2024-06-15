var express = require("express");
var app = express();
var es = require("express-session");
app.use(es({
    secret: 'LJU123',
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 3000 }
}));
app.get("/", (req, res) => {
    if (req.session.pv) {
        req.session.pv++;
        res.send("<h1 style=color:red>You have visited " + req.session.pv + "times</h1>");
    }
    else {
        req.session.pv = 1;
        res.send("<h1 style='color:green'>Welcome user</h1>");
    }
});
app.listen(8888);