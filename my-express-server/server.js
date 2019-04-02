//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){   // request and reponse often written as req and res respectively
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at mahbub-ahmed@hotmail.co.uk");
});

app.get("/about", function(req, res){
  res.send("Hi! My name is Mahbub Ahmed and I'm learning web development.");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>code</li><li>photography</li><li>sitting</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
