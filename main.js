//Variables
var wins = 0;
var loses = 0;
var guess = 0;
var keys = [];
var letterGuessed;
keys.push();
var comChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];


//DOM related variables
var winDisplayEl = document.getElementById("winDisplay");
var losesDisplayEl = document.getElementById("losesDisplay");
var guessDisplayEl = document.getElementById("guessDisplay");
var keysDisplayEl = document.getElementById("keysDisplay");

//Resets variables
function startGame() {
    letterGuessed = comChoice[randomInteger(0, 25)];
    keys = [];
    guess = 0;
    console.log("This is the letter" + letterGuessed);
}

//Updates DOM
function updateDom() {
  winDisplayEl.textContent = wins;
  losesDisplayEl.textContent = loses;
  guessDisplayEl.textContent = guess;
  keysDisplayEl.textContent = keys;
}

//Selects random Index from Array
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//onKeyUp listener
document.onkeyup = myKeyUpHandler;

//conditionals from onKeyUp regarding wins/loses/guesses/restarts
function myKeyUpHandler(event) {
  console.log(event);
  console.log(event.key);
  keys.push(event.key);
    console.log(keysDisplayEl + "line59")
    console.log(comChoice + "line59")
  if (event.key === letterGuessed) {
    wins++;
    startGame();
  } else {
    guess++;
    if (guess === 10){
        loses++;
        startGame();
    }
  }

  updateDom();
}

updateDom();
startGame();

console.log(randomInteger(0, 25));
console.log(comChoice[randomInteger(0, 25)]);
