


// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


// THIS LOOP ADDS AN EVENT LISTENER WHICH WAITS FOR THE EVENT, I.E. MOUSE CLICK,
// AND WILL EXECUTE THE FUNCTION * clickDrumKit * WHEN THE EVENT IS TRIGGERED,
// WHICH WILL TRIGGER THE INSTRUCTIONS IN THE FUNCTION BELOW - * clickDrumKit *
// THIS INCLUDES MAKING A SOUND AND BUTTON ANIMATION

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", clickDrumKit);
}

function clickDrumKit() {

  var buttonInnerHTML = this.innerHTML;

  // THE innerHTML METHOD ALLOWS US TO *GET* OR *CHANGE* THE HTML IN A DOCUMENT,
  // I.E. IN THE D.O.M (DOCUMENT OBJECT MODEL)
  // IN THIS CASE WE ARE ACCESSING THE HTML TO TRIGGER THE DIFFERENT DRUM SOUNDS
  // & ANIMATIONS

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML)

}

// Detecting keyboard press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

})

function makeSound(key) {
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: console.log(buttonInnerHTML);

  }
}


// *** ALTERNATIVE WAY TO WRITE IT --- function WRITTEN INSIDE THE FOR LOOP ***
//
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//
//     var buttonInnerHTML = this.innerHTML;
//
//     switch (buttonInnerHTML) {
//       case "w":
//           var tom1 = new Audio("sounds/tom-1.mp3");
//           tom1.play();
//           break;
//
//       case "a":
//           var tom2 = new Audio("sounds/tom-2.mp3");
//           tom2.play();
//           break;
//
//       case "s":
//           var tom3 = new Audio("sounds/tom-3.mp3");
//           tom3.play();
//           break;
//
//       case "d":
//           var tom4 = new Audio("sounds/tom-4.mp3");
//           tom4.play();
//           break;
//
//       case "j":
//           var snare = new Audio("sounds/snare.mp3");
//           snare.play();
//           break;
//
//       case "k":
//           var crash = new Audio("sounds/crash.mp3");
//           crash.play();
//           break;
//
//       case "l":
//           var kick = new Audio("sounds/kick-bass.mp3");
//           kick.play();
//           break;
//
//       default: console.log(buttonInnerHTML);
//
//     }
//
//   });
// }
//

function buttonAnimation(currentKey) {

  var activebutton = document.querySelector("." + currentKey)
  // concatenate b/c accessing class

  activebutton.classList.add("pressed");
  // NO "." when adding a class using classList

  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
  // e.g. setTimeout(function() { alert("Hello");}, 3000)

}
