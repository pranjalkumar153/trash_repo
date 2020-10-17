var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi!! Welocome to my new app");
});

app.get("/doggy", function(req, res) {
    res.send("Meow!!");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!! Have a good day!!");
});


app.listen(8000, 8000, function() {
    console.log("Message from the server: ");
    console.log("CONNECTED SUCCESSFULLY!!");
    console.log("Server: localhost:" + 8000);
});