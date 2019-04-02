

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// IF *NOT* STARTED THEN KEYPRESS WILL TRIGGER THE FOLLOWING ACTIONS

$(document).keypress(function() {
  if (!started) {
    started = true;
    $("h1").text("Level " + level);
    nextSequence();
  }
});

//  PLAY SOUND FUNCTION

function playSound(name) {
  var colorSound = new Audio("sounds/" + name + ".mp3");
  colorSound.play();
}

// GENERATE & RETURN RANDOM NUMBER 0 - 3 (INCLUSIVE)

function nextSequence() {

  // RESET userClickedPattern ARRAY

  userClickedPattern = [];

  // ADD +1 TO THE LEVEL WHEN nextSequence IS CALLED AND OUTPUT THIS IN THE h1 TAG

  level++;
  $("h1").text("Level " + level);

  // RANDOMLY CHOOSE A COLOR FROM THE buttonColors ARRAY USING THE RANDOM NUMBER
  // FUNCTION

  randomNumber = Math.floor( Math.random() * 4 );

  var randomChosenColor = buttonColors[randomNumber];

  // MAKE RANDOMLY CHOSEN COLOR FLASH

  $("#" + randomChosenColor).fadeOut(100).fadeIn(10)

  // PLAY AUDI0 FOR randomChosenColor

  playSound(randomChosenColor);

  // ADD LAST randomChosenColor TO END OF SEQUENCE

  gamePattern.push(randomChosenColor);

}

// ADD .pressed class css ATTRIBUTES TO THE CLICKED COLOR CLASS

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");}, 100);
}

// STORE id OF CLICKED BUTTON

$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

// FUNCTION TO CHECK IF USER'S INPUT IS THE SAME AS THE GAME PATTERN

function checkAnswer(currentLevel) {

  // CHECK IF THE USER'S LATEST CHOSEN COLOR MATCHES UP WITH THE CORRESPONDING
  // POSITION IN THE GENERATED gamePattern ARRAY

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    console.log("success");
    console.log(gamePattern);
    console.log(userClickedPattern);

    // CHECK IF THE USER HAS COMPLETED LATEST FULL gamePattern SEQUENCE
    // CORRECTLY

    if (userClickedPattern.length === gamePattern.length) {

      // IF CORRECT CALL THE NEXT COLOR IN THE SEQUENCE AFTER A 1 SEC DELAY

      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }

  else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("GAME OVER. Press any key to restart");
    startOVer();
  }
}

// *** START OVER *** FUNCTION

function startOVer() {
  gamePattern = [];
  started = false;
  level = 0;
}
