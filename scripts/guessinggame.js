//generate random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById("submitGuess").addEventListener("click", compareGuess);
//create varibles for user input
let userGuess;
let attempts = 0;

//create comparing logic 
function compareGuess() {
    userGuess = parseInt(document.getElementById('guessInput').value);

    if (userGuess < randomNumber ) {
        console.log("It is low number")}
    else if (userGuess > randomNumber) {
        console.log("It is high number")}
        else if (userGuess === randomNumber) {
        console.log("You guessed it right!")}
        else {
        console.log("Please provide a valid number between 1 and 100")}  
        }
//print result 
compareGuess();

function attemptsAmount(){

    if (userGuess !== randomNumber) {
        attempts++;
    }
    if (attempts === 3) {
        console.log("You have used all your attempts!");
    }
}
attemptsAmount();