var express = require("express");
var app = express();

app.use("/t2", express.static(__dirname, { index: 't4.html' }));
app.get('/data2', (req, res) => {
    res.set("content-type", "text/html")
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
    if ((n1 > 0) && (n2 > 0)) {
        if (req.query.calculate == 'add') {
            add = n1 + n1;
            res.write("add:"+add)
        }
        else if (req.query.calculate == 'mul') {
            mul = n1 * n2;
            res.write("mul:"+mul)
        }
        else if (req.query.calculate == 'div') {
            div = n1 / n2
            res.write("div:"+div)
        }
        else if (req.query.calculate == 'sub') {
            sub = n1 - n2
            res.write("sub:"+sub)
        }
        else {
            res.write("Not select any")
        }
    }
    else {
        res.write("Please enter valid number")
    }
    res.send();
});
app.listen(5016);