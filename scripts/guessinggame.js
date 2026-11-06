//generate random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById("submitGuess").addEventListener("click", compareGuess);
//create varibles for user input
let userGuess;
let attempts = 0;
let gameOver = false;


//create comparing logic
function compareGuess() {
        if (gameOver) {
        console.log("Game over! Please refresh the page to play again.");
        return;
    }
  if (attempts === 3) {
    console.log("You have used all your attempts!");
    return;
  }
  userGuess = parseInt(document.getElementById("guessInput").value);
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
  if (attempts === 3&& userGuess !== randomNumber) {
    console.log("You have used all your attempts!");
    gameOver = true;
  }
}
