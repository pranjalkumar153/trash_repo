var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Welcome to HomePage!!");
});

app.get("/login/:user", function(req, res) {
    var name = req.params.user;
    res.render("login.ejs", { username: name });
});

app.get("/logout/:user", function(req, res) {
    var name = req.params.user;
    res.render("logout.ejs", { username: name });
});

app.listen(8000, 800, function() {
    console.log("Successfully connected to server!!");
});