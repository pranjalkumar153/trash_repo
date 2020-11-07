var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var localStrategy = require("passport-local");
var pappsortLocalMongoose = require('passport-local-mongoose');

var User = require("./models/user");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
    secret: "I am Pranjal Kumar",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect("mongodb://localhost/auth_demo");

//============================================================================//
// ROUTES=====================================================================//


app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

app.get("/register", function(res, res) {
    res.render("register");
});
app.post("/register", function(req, res) {
    var user_name = req.body.Username;
    var p = req.body.Password;
    User.register(new User({ username: user_name }), p, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        } else {
            passport.authenticate(req, res, function() {
                req.redirect("/secret");
            });
        }
    });
});

app.listen(8000, 8000, function() {
    console.log("SERVER STARTED AT 8000 !!");
});