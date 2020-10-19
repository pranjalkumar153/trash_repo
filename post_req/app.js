var express = require("express");
var app = express();

var faker = require("faker");


app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("HI!!! WELCOME TO THE HOMEPAGE");
});
var friends = [];
for (var i = 0; i < 5; i++) {
    var fr = faker.name.findName();
    friends.push(fr);
}
console.log(friends);
app.get("/friends", function(req, res) {
    res.render("friends", { friends: friends });
});

app.post("/addfriends", function(req, res) {
    res.send("A new friend has been added!!");
});

app.listen(8000, 8000, function() {
    console.log("SUCCESSFULLY CONNECTED TO THE SERVER!!");
});