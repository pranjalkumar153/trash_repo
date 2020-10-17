var express = require("express");
var app = express();

var faker = require("faker");

app.get("/", function(req, res) {
    var ls = [];
    for (var i = 0; i < 10; i++) {
        var book = faker.lorem.sentence();
        var name = faker.name.findName();
        var bk = {};
        bk.title = book;
        bk.author = name;
        console.log(bk);
        ls.push(bk);
    }
    res.render("home.ejs", { list: ls });
})

app.listen(8000, 8000, function() {
    console.log("Successfully connected to server!!");
});