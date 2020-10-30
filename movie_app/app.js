// Added express framework in the code

var express = require("express");
var app = express();

var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));

var request = require("request");

// setting this view engine so that the coder need not provide
// the extension each and every time.
app.set("view engine", "ejs");

// app.get("/", function(req, res) {
//     res.send("SERVER IS WORKING AS EXPECTED!!");
// });


// 1. Home page setup successfully done.

// 2. API action successfully added.
app.get("/", function(req, res) {
    res.render("home");
});

// Initializing a global variable for storing the results.
var result = "";

// format of API call
// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

app.post("/search_results", function(req, res) {
    var keyword = req.body.movie_name;
    console.log(keyword);
    var url = "http://www.omdbapi.com/?apikey=90331194&s=";
    url += keyword;
    request(url, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            result = JSON.parse(body);
            console.log("INFORMATION FETCHED FROM API IS AS FOLLOWS: ");
            console.log(result);
        } else {
            console.log("MAKE SURE YOU ARE CONNECTED TO INTERNET!!");
            res.send("YOU AREN'T CONNECTED");
        }
    });
    var result_page = function() {
        res.redirect("/results/keyword");
    }
    setTimeout(result_page, 5000);
    // res.redirect("/results/keyword");
});

app.get("/results/keyword", function(req, res) {
    res.render("result_page", { results: result.Search });
});



app.listen(8000, 8000, function() {
    console.log("CONNECTED SUCCESSFULLY TO THE SERVER!!");
    console.log("THE ROUTES ARE HOSTED VIA: ");
    console.log("localhost:8000");
});