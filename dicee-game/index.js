/**
 * Calculate a random dice roll, i.e. a random number
 * between 1 and 6.
 */
function calculateDiceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * Shows the dice image for both player's current dice value.
 * @param {Number} player1Roll the dice value for player 1
 * @param {Number} player2Roll the dice value for player 2
 */
function showPlayerDice(player1Roll, player2Roll) {
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice" + player1Roll + ".png");

  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice" + player2Roll + ".png");
}

/**
 * Calculate the winner of the dice game, and show the winner
 * in the title (h1) element on the screen.
 * @param {Number} player1Roll the dice value for player 1
 * @param {Number} player2Roll the dice value for player 2
 */
function calculateWinnerAndShow(player1Roll, player2Roll) {
  const titleEl = document.querySelector("h1");
  let title;
  if (player1Roll === player2Roll) {
    title = "Draw!";
  } else if (player1Roll > player2Roll) {
    title = "🚩Player 1 Wins";
  } else {
    title = "Player 2 Wins 🚩";
  }

  titleEl.innerHTML = title;
}

/**
 * Algorithm for playing the actual dice game.
 */
function playGame() {
  const player1Roll = calculateDiceRoll();
  const player2Roll = calculateDiceRoll();
  showPlayerDice(player1Roll, player2Roll);
  calculateWinnerAndShow(player1Roll, player2Roll);
}

/**
 * Play the game when file loads.
 */
playGame();
