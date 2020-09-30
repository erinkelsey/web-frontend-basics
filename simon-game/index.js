/**
 * Constants and Game Variables
 */
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

/**
 * Animates the button color when clicked.
 * @param {String} colorKey key for button color
 */
function animateColor(colorKey) {
  $("#" + colorKey)
    .fadeOut(100)
    .fadeIn(100);
}

/**
 * Plays a sound based on which color was selected.
 * @param {String} colorKey key for button color
 */
function playSoundColor(colorKey) {
  let audioFile;
  switch (colorKey) {
    case "red":
      audioFile = "sounds/red.mp3";
      break;
    case "blue":
      audioFile = "sounds/blue.mp3";
      break;
    case "green":
      audioFile = "sounds/green.mp3";
      break;
    case "yellow":
      audioFile = "sounds/yellow.mp3";
      break;
    default:
      break;
  }

  var audio = new Audio(audioFile);
  audio.play();
}

/**
 * Choose a random color from [buttonColors], and return.
 */
function chooseRandomColor() {
  const randomNumber = Math.floor(Math.random() * 4);
  return buttonColors[randomNumber];
}

/**
 * Increase the game level by one, and display the new level on screen.
 */
function upLevel() {
  level++;
  $("h1").text("Level " + level);
}

/**
 * Goes through process of showing the user the next color in the sequence.
 */
function nextSequence() {
  upLevel();

  const color = chooseRandomColor();
  gamePattern.push(color);

  animateColor(color);
  playSoundColor(color);
}

/**
 * Checks if the user has finished the sequence, if so the next color in the
 * sequence is called.
 */
function checkUserFinishedSequence() {
  if (gamePattern.length === userClickedPattern.length) {
    userClickedPattern = [];

    setTimeout(() => {
      nextSequence();
    }, 1000);
  }
}

/**
 * Restarts the game, by setting the game variables back to initial values, and
 * showing user a message.
 */
function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];

  $("h1").text("Press A Key To Restart");
}

/**
 * Called when the user's game is over. Plays a sound, and page flashes red.
 */
function gameOver() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();

  $("body").addClass("game-over");

  setTimeout(() => {
    $("body").removeClass("game-over");
    startOver();
  }, 200);
}

/**
 * Checks that the color selected by the user at the specific index is the same as that
 * in the game sequence.
 * @param {Number} currentLevel the current index of the game sequence the user is selecting
 */
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
    checkUserFinishedSequence();
  else gameOver();
}

/**
 * Animates a specific button
 * @param {String} colorKey the color key for the button
 */
function animateUserPress(colorKey) {
  const el = $("#" + colorKey);
  el.addClass("pressed");

  setTimeout(() => {
    el.removeClass("pressed");
  }, 100);
}

/**
 * Set up listeners for all of the game buttons.
 *
 * When clicked, button is animated, sounds is played, and user's answer is
 * checked against the game pattern.
 */
$(".btn").click((event) => {
  const chosenColor = event.target.id;
  userClickedPattern.push(chosenColor);
  animateUserPress(chosenColor);
  playSoundColor(chosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

/**
 * Start game when user presses a key, if on Level 0
 */
$(document).keydown(() => {
  if (level === 0) {
    nextSequence();
  }
});
