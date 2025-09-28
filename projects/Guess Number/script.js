document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
});
document.body.style.backgroundColor = "#212121";
document.body.style.color = "white";
const container = document.querySelector(".container");
container.style.border = "2px solid #29B6F6";
container.style.height = "500px";
container.style.width = "500px";
// container.style.border = "2px solid black";
container.style.backgroundColor = "#E0E0E0";
container.style.color = "black";
container.style.margin = "0 auto";
container.style.marginTop = "100px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexDirection = "column";
const button = document.querySelector("#subt");
const input = document.querySelector("#number");
const results = document.querySelector(".results");
button.style.display = "block";
container.style.borderRadius = "12px";
container.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
input.style.padding = "8px";
input.style.border = "2px solid #29B6F6";
input.style.borderRadius = "6px";

button.style.padding = "8px 16px";
button.style.backgroundColor = "#9bd4eeff";
button.style.color = "black";
button.style.border = "none";
button.style.borderRadius = "6px";
button.style.cursor = "pointer";
button.style.fontWeight = "bold";
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#0288D1";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#29B6F6";
});
button.style.marginTop = "10px";
button.style.marginLeft = "55px";
results.style.margin = "0 auto";
results.style.display = "flex";
results.style.justifyContent = "center";
results.style.alignItems = "center";
results.style.flexDirection = "column";

const submit = document.querySelector("#subt");
const Guess = document.querySelector("#previous");
const Remaining = document.querySelector("#Remaining");
const lowOrHigh = document.querySelector("#lowOrHigh");
const startOver = document.querySelector(".results");
let number = parseInt(Math.random() * 100 + 1);
let prevGuess = [];
let numOfguess = 0;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let values = parseInt(input.value);
    console.log(values);
    validGuess(values);
  });
}
function validGuess(guess) {
  if (isNaN(guess)) {
    alert("⚠️ Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("⚠️ Enter a number between 1 and 100");
  } else {
    numOfguess++;
    displayGuess(guess);

    if (guess === number) {
      displayMessage("🎉 Hoo Hoo! You found the number!");
      endGame();
    } else if (numOfguess >= 10) {
      displayMessage(`💀 Game Over! The number was ${number}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess < number) {
    displayMessage("📉 Number is too low");
  } else {
    displayMessage("📈 Number is too high");
  }
}
function displayGuess(guess) {
  input.value = "";
  Guess.innerHTML += ` ${guess} `;
  Remaining.innerHTML = `${10 - numOfguess}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  input.disabled = true;
  submit.disabled = true;
  const restart = document.createElement("button");
  restart.innerText = "Play Again";
  restart.style.border = "2px solid blue";
  restart.style.margin = "10px";
  restart.style.padding = "10px";
  restart.style.backgroundColor = "white";
  restart.style.cursor = "pointer";
  restart.style.borderRadius = "10px";
  startOver.appendChild(restart);
  playGame = false;
  newGame(restart);
}
function newGame(restart) {
  restart.addEventListener("click", () => {
    numOfguess = 0;
    Guess.innerHTML = "";
    Remaining.innerHTML = "10";
    lowOrHigh.innerHTML = "";
    number = parseInt(Math.random() * 100 + 1);
    button.disabled = false;
    input.disabled = false;
    startOver.removeChild(restart);
    playGame = true;
  });
}
