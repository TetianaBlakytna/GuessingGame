//generate random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById("submitGuess").addEventListener("click", compareGuess);
document.getElementById("restartGame").addEventListener("click", resetGame);
//create varibles for user input
let userGuess; //number input by user
let attempts = 0; //number of attempts made by user
let gameOver = false; //flag to indicate if the game is over
const resultMessage = document.getElementById("resultMessage");
const attemptsCounter = document.getElementById("attemptsCounter");
//create comparing logic
function compareGuess() {
  if (gameOver) {
    resultMessage.textContent =
      "Game over! Please refresh the page to play again.";
    document.getElementById("guessInput").value = "";
    return;
  }
  userGuess = parseInt(document.getElementById("guessInput").value);
  if (userGuess < 1 || userGuess > 100) {
    resultMessage.textContent =
      "Invalid number. Please provide a valid number between 1 and 100";
    return;
  }
  if (userGuess < randomNumber) {
    resultMessage.textContent = "Your number is too low!";
  } else if (userGuess > randomNumber) {
    resultMessage.textContent = "Your number is too high!";
  } else if (userGuess === randomNumber) {
    resultMessage.textContent = "You guessed it right!";
    gameOver = true;
  } else {
    resultMessage.textContent =
      "Please provide a valid number between 1 and 100";
    return;
  }
  attemptsAmount();
}

function attemptsAmount() {
  attempts++;
  attemptsCounter.textContent = "You have used " + attempts + " attempts.";
  if (attempts === 3 && userGuess !== randomNumber) {
    attemptsCounter.textContent = "You have used all your attempts!";
    gameOver = true;
    resultMessage.textContent = "Game over! Please restart the game.";
  }
}
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;
  resultMessage.textContent = "New game started!";
  document.getElementById("guessInput").value = "";
}
