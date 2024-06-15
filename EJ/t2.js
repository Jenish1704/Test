var express = require("express");
var app = express();
var path = require("path");
var p = path.join("frontend");
app.use(express.static(p, { index: 't2.html' }));
app.get('/data', (req, res) => {
    res.send(req.query);
});
app.listen(5013);