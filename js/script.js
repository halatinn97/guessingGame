//Game variables upon game load

let mysteryNumber = 50;
let playersGuess = 0;

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
    //Player input interpreted as number - remember: input typed into HTML input default: string
    playersGuess = parseInt(input.value);

    if (playersGuess > mysteryNumber) {
        output.innerHTML = "That's too high.";
    } else if (playersGuess < mysteryNumber) {
        output.innerHTML = "That's too low.";
    } else if (playersGuess === mysteryNumber) {
        output.innerHTML = "You got it!";
    }
}