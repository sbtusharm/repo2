const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Home Page</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact Page..");
});

app.listen(3000, function () {
    console.log("Server started on 3000.");
});