
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  // console.log(req.body.crypto);

  var cryptoValue = req.body.crypto;
  var fiatValue = req.body.fiat;
  var amountValue = req.body.amount;

  // var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

  // var finalURL = baseURL + cryptoValue + fiatValue;

  var options = {
    url: "https://apiv2.bitcoinaverage.com/convert/global",
    method: "GET",
    qs: {
      from: cryptoValue,
      to: fiatValue,
      amount: amountValue
    }
  };

  request(options, function(error, response, body){
    // console.log(response.statusCode);

    var data = JSON.parse(body);
    var price = data.price;

    console.log(amountValue + cryptoValue + " = " + price + fiatValue);

    var currentDate = data.time;

    // console.log(price);

    res.write("<p>The current date is " + currentDate + "</p>");

    res.write("<h1>The price of " + amountValue + " " + cryptoValue + " is currently worth " + price + " " + fiatValue + " " + "</h1>");

    res.send();
  });

});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
