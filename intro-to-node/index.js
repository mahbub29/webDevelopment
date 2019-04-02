//jshint esversion:6


var superheroes = require("superheroes");
var supervillains = require("supervillains");

var myHeroName = superheroes.random();
var myVillainName = supervillains.random();

console.log("Your superhero name is " + myHeroName + ".");
console.log("Your supervillain name is " + myVillainName + ".");
