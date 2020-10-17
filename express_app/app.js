var express = require("express");
var app = express();

// the first matching route for any given link is considered
// as the request to be rendered on a browser.


app.get("/", function(req, res) {
    res.send("Hi!! Welocome to my new app");
});

app.get("/doggy", function(req, res) {
    res.send("Meow!!");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!! Have a good day!!");
});

// for creating any webpage with format /r/subreddit/commets/user
// the following instance is used
app.get("/r/:subreddit/comments/:user", function(req,res){
    res.send("Hi Pranjal!!");
    console.log(req.params);
    console.log("Subreddit: "+req.params.subreddit.toUpperCase());
    console.log("User: "+req.params.user.toUpperCase());
});


app.listen(8000, 8000, function() {
    console.log("Message from the server: ");
    console.log("CONNECTED SUCCESSFULLY!!");
    console.log("Server: localhost:" + 8000);
});