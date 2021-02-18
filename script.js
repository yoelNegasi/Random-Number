let secretNumber = Math.trunc(Math.random() * 100) + 1;

let tries = 0;
let score = 0;

let indicator = document.getElementById("indicator");
let numberOfTries = document.getElementById("tries");
let totalScore = document.getElementById("score");
let title = document.getElementById("title");
document.getElementById("btnSubmit").addEventListener("click", function () {
  const guess = Number(document.getElementById("guess").value);

  if (!guess) {
    document.getElementById("indicator").textContent = "⛔️ no number";
    indicator.style.fontSize = "400%";
  } else if (guess === secretNumber) {
    indicator.textContent = "🎉congrats you won🎉 ";
    indicator.style.fontSize = "400%";
    totalScore.textContent = score + 1;
    totalScore.style.fontSize = "400%";
    document.getElementById("guess").value = "";
    score++;
    document.querySelector("#topLeft").style.backgroundColor = "#60b347";
    title.textContent = "winner the number was " + secretNumber;
    title.style.fontSize = "400%";
  } else if (guess > secretNumber) {
    indicator.textContent = "⬇️ GO LOWER ";
    indicator.style.fontSize = "380%";
    tries++;
    numberOfTries.textContent = tries;
    numberOfTries.style.fontSize = "400%";
  } else if (guess < secretNumber) {
    indicator.textContent = "⬆️ GO HIGHER ";
    indicator.style.fontSize = "380%";
    tries++;
    numberOfTries.textContent = tries;
    numberOfTries.style.fontSize = "400%";
  }
});

document.getElementById("btnNew").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  numberOfTries.textContent = 0;
  numberOfTries.style.fontSize = "400%";
  document.getElementById("guess").value = "";
  indicator.textContent = "new game";
  indicator.style.fontSize = "400%";
  totalScore.textContent = 0;
  totalScore.style.fontSize = "400%";
  document.querySelector("#topLeft").style.backgroundColor =
    "rgb(120, 168, 230)";
  title.textContent = "Guess a Number 1 - 100";
  title.style.fontSize = "300%";
});

document.getElementById("btnReset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  document.getElementById("guess").value = "";
  indicator.textContent = "number changed";
  indicator.style.fontSize = "300%";
  document.querySelector("#topLeft").style.backgroundColor =
    "rgb(120, 168, 230)";
  title.textContent = "START GUESSING.....";
  title.style.fontSize = "300%";
});
