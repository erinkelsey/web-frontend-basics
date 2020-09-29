/**
 * Animates the button that user selected.
 * @param {char} key the key pressed/clicked to play specific sound
 */
function buttonAnimation(key) {
  const activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

/**
 * Play a specific sound based on the key input.
 * @param {char} key the key pressed/clicked to play specific sound for
 */
function playDrumSoundForKey(key) {
  let audioFile;
  switch (key) {
    case "w":
      audioFile = "sounds/tom-1.mp3";
      break;
    case "a":
      audioFile = "sounds/tom-2.mp3";
      break;
    case "s":
      audioFile = "sounds/tom-3.mp3";
      break;
    case "d":
      audioFile = "sounds/tom-4.mp3";
      break;
    case "j":
      audioFile = "sounds/snare.mp3";
      break;
    case "k":
      audioFile = "sounds/crash.mp3";
      break;
    case "l":
      audioFile = "sounds/kick-bass.mp3";
      break;
    default:
      break;
  }

  var audio = new Audio(audioFile);
  audio.play();
}

/**
 * Setup the click listeners for the drum buttons.
 */
function setupClickEventListeners() {
  var drumButtons = document.querySelectorAll(".drum");

  for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
      const buttonText = this.innerHTML;
      playDrumSoundForKey(buttonText);
      buttonAnimation(buttonText);
    });
  }
}

/**
 * Setup the keyboard event listener for playing sounds based on keys pressed.
 */
function setupKeyboardEventListeners() {
  document.addEventListener("keydown", function (event) {
    playDrumSoundForKey(event.key);
    buttonAnimation(event.key);
  });
}

/**
 * Setup all event listeners
 */
function setupListeners() {
  setupClickEventListeners();
  setupKeyboardEventListeners();
}

// Execute setup of event listeners on load.
setupListeners();
