const form = document.getElementById("myForm");
const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".submit_btn");
const startGame = document.querySelector(".start_game");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randNumber = getRandomNumber(1, 100);
let guessMade = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (parseInt(input.value) > randNumber) {
    message.innerText = "Too high!";
  } else if (randNumber > parseInt(input.value)) {
    message.innerText = "Too low!";
  } else if (randNumber === parseInt(input.value)) {
    message.innerText = "You got it! Congrats";
    submitBtn.setAttribute("disabled", "disabled");
    startGame.removeAttribute("disabled");
  } else {
    alert("invalid number");
  }

  guessMade.push(input.value);
  input.value = "";

  guess.innerText = `Your Guesses: ${guessMade}`;
});

startGame.addEventListener("click", () => {
  input.value = "";
  message.innerText = "";
  guess.innerText = "";
  randNumber = getRandomNumber(1, 100);
  guessMade = [];

  submitBtn.removeAttribute("disabled");
  startGame.setAttribute("disabled", "disabled"); // Set attribute with a value
});
