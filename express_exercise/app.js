var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi!!");
});

app.get("/speak/:animal", function(req,res){
    if(req.params.animal=="pig") res.send("Oink!!");
    else if(req.params.animal=="dog") res.send("Woof Woof!!");
    else if(req.params.animal=="cow") res.send("Moo!!");
    else res.send("You entered a wrong animal!!");
});

app.get("/repeat/:st/:num",function(req,res){
    var p = "";
    for(var i=0;i<req.params.num;i++){
        p+= req.params.st+" ";
    }
    res.send(p);
});




app.listen(8000, 8000, function(){
    console.log("SUCCESSFULLY CONNECTED TO SERVER!!");
});