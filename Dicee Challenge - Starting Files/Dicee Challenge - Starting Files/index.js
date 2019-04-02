
var randomNumber1;

function diceGenerator() {

x = Math.floor(Math.random()*6)+1;

return x;

}

randomNumber1 = diceGenerator();
randomNumber2 = diceGenerator();

// console.log(randomNumber1);

var diceNumber1 = "images/dice" + randomNumber1 + ".png";
var diceNumber2 = "images/dice" + randomNumber2 + ".png"

// console.log(diceName);

document.querySelector(".img1").setAttribute("src", diceNumber1);
document.querySelector(".img1");
document.querySelector(".img2").setAttribute("src", diceNumber2);
document.querySelector(".img2");

// PLAYER RESULT

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!"
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
}

else {
  document.querySelector("h1").textContent = "Draw!"
}
