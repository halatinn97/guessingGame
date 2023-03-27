//Game variables upon game load

let mysteryNumber = 50;
let playersGuess = 0;
let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";
let gameWon = false;

//Input & output fields

let input = document.querySelector("#input");
let output = document.querySelector("#output");

//Button

let button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);

//(Seperation of actions - modularization - to increase expansion flexibility in the future)
function clickHandler() {
    playGame();
}

function playGame() {
    guessesRemaining--;
    guessesMade++;
    gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;


    //Player input interpreted as number - remember: input typed into HTML input default: string
    playersGuess = parseInt(input.value);

    if (playersGuess > mysteryNumber) {
        output.innerHTML = "That's too high." + gameState;

        //Check for end of game

        if (guessesRemaining < 1) {
            endGame();
        }

    } else if (playersGuess < mysteryNumber) {
        output.innerHTML = "That's too low." + gameState;

        //Check for end of game

        if (guessesRemaining < 1) {
            endGame();
        }

    } else if (playersGuess === mysteryNumber) {
        gameWon = true;
        endGame();
    }
}

function endGame() {
    if (gameWon) {
        output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" + "It only took you " + guessesMade + " guesses.";
    } else {
        output.innerHTML = "No more guesses left!" + "<br>" + "The number was: " + mysteryNumber + ".";
    }
}