// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// *** TEST CODE OMMITED - CHECK AT END OFF SCRIPT ***

app.get("/", function(req, res) {

  let day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.get("/work", function(req, res){
  res.render("list", {
    listTitle: "Work",
    newListItems: workItems
  });
});

app.get("/about", function(req, res){
  res.render("about");
});

app.post("/addToList", function(req, res){

  let newItem = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  }

  else {
    items.push(newItem);
    res.redirect("/");
  }
});

app.post("/clearList", function(req, res){

  if (req.body.list === "Work") {
    workItems = [];
    res.redirect("/work");
  }

  else {
    items = [];
    res.redirect("/");
  }
});

app.post("/rItem", function(req, res){

  let btnID = Number(req.body.btnItem);

  // console.log(btnID);
  // console.log(typeof(btnID));
  items.splice(btnID, 1);

  res.redirect("/");
});

app.post("/rWorkItem", function(req, res){

  let btnID = Number(req.body.btnWork);

  // console.log(btnID);
  // console.log(typeof(btnID));
  workItems.splice(btnID, 1);

  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});

// ----------------------  OMITTED TEST CODE  ----------------------

// app.get("/", function(req, res) {
//
//   let today = new Date();
//   let currentDay = today.getDay();
//   // let dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//   let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//   // let day = "";
//
//   // getDay gets the day of the week as a number, i.e. Sunday is 0, Monday will be 1,
//   // Tuesday will be 2, and so on till Saturday is 6
//
//   // if (currentDay === 6 || currentDay === 0){
//   //   // res.write("<p>It is " + dayOfTheWeek[currentDay] + ". It's the weekend</p>");
//   //   // res.write("<h1>Yay! It's the weekend!</h1>");
//   //   day = "Weekend";
//   // }
//   // else {
//   //   // res.write("<p>It is " + dayOfTheWeek[currentDay] + ". Its a weekday</p>");
//   //   // res.write("<h1>Boo! I have to work!</h1>");
//   //   day = "Weekday";
//   // }
//
//   res.render("list", {
//     typeOfDay: day[currentDay]
//   });
// });

// app.get("/", function(req, res) {
//
//   let today = new Date();
//   let currentDay = today.getDay();
//   let day = "";
//
//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       console.log("Error: Current day is equal to: " + currentDay);
//   }
//   res.render("list", {
//     typeOfDay: day
//   });
// });
