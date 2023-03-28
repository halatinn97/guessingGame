//Game variables upon game load

let mysteryNumber = Math.floor(Math.random() * 100);
let playersGuess = 0;
let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";
let gameWon = false;

//Input & output fields

let input = document.querySelector("#input");
let output = document.querySelector("#output");

//Button & its event listeners

let button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);

// -- Seperation of actions - modularization - to increase expansion flexibility in the future --

window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event) {
    if (event.key === "Enter") {
        validateIndput();
    }
}

function clickHandler() {
    validateIndput();
}

//Arrow

let arrow = document.querySelector("#arrow");

function render(guess) {
    const scaleWidth = document.querySelector('#scale').clientWidth;
    const arrowWidth = document.querySelector('#arrow').clientWidth;
    const scaleStartX = document.querySelector('#scale').getBoundingClientRect().left;
    const scaleEndX = document.querySelector('#scale').getBoundingClientRect().right;
    const positionX = ((guess / 99) * scaleWidth) + scaleStartX - arrowWidth / 2;
    return positionX;
}


//Input validation 

function validateIndput() {
    playersGuess = parseInt(input.value);

    if (isNaN(playersGuess)) {
        output.innerHTML = "Please enter a number.";
    } else {
        playGame();
    }
}

//Running game functionality

function playGame() {
    guessesRemaining--;
    guessesMade++;
    gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;

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
    //Update graphic display
    arrow.style.left = render(playersGuess) + "px";
}

//End game functionality 

function endGame() {
    if (gameWon) {
        output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" + "It only took you " + guessesMade + " guesses.";
    } else {
        output.innerHTML = "No more guesses left!" + "<br>" + "The number was: " + mysteryNumber + ".";
    }

    //Disable the button

    button.removeEventListener("click", clickHandler, false);
    button.disabled = true;

    //Disable enter key

    window.removeEventListener("keydown", keydownHandler, false);

    //Disable input field

    input.disabled = true;
}