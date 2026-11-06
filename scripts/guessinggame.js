//generate random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById("submitGuess").addEventListener("click", compareGuess);
document.getElementById("restartGame").addEventListener("click", resetGame);
//create varibles for user input
let userGuess; //number input by user
let attempts = 0; //number of attempts made by user
let gameOver = false; //flag to indicate if the game is over

//create comparing logic
function compareGuess() {
  if (gameOver) {
    console.log("Game over! Please refresh the page to play again.");
    document.getElementById("guessInput").value = "";
    return;
  }
  userGuess = parseInt(document.getElementById("guessInput").value);
  if (userGuess < 1 || userGuess > 100) {
    console.log(
      "Invalid number. Please provide a valid number between 1 and 100",
    );
    return;
  }
  if (userGuess < randomNumber) {
    console.log("It is low number");
  } else if (userGuess > randomNumber) {
    console.log("It is high number");
  } else if (userGuess === randomNumber) {
    console.log("You guessed it right!");
    gameOver = true;
  } else {
    console.log("Please provide a valid number between 1 and 100");
    return;
  }
  attemptsAmount();
}

function attemptsAmount() {
  attempts++;
  console.log(`You have used ${attempts} attempts.`);
  if (attempts === 3 && userGuess !== randomNumber) {
    console.log("You have used all your attempts!");
    gameOver = true;
    console.log("Game over! Please restart the game.");
  }
}
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;
  console.log("New game started!");
  document.getElementById("guessInput").value = "";
}
