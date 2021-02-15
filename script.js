let secretNumber = Math.trunc(Math.random() * 100) + 1;
let changeNum = Math.trunc(Math.random() * 100) + 1;
//document.getElementById("indicator").textContent = secretNumber;
let tries = 0;
let score = 0;
let indicator = document.getElementById("indicator");
let numberOfTries = document.getElementById("tries");
let totalScore = document.getElementById("score");
document.getElementById("btnSubmit").addEventListener("click", function () {
  const guess = Number(document.getElementById("guess").value);

  if (!guess) {
    document.getElementById("indicator").textContent = "⛔️ no number";
    indicator.style.fontSize = "400%";
  } else if (guess === secretNumber) {
    indicator.textContent = "🎉congrats you won🎉 ";
    indicator.style.fontSize = "400%";
    totalScore.textContent = score + 1;
    score++;
    document.querySelector("#topLeft").style.backgroundColor = "#60b347";
  } else if (guess > secretNumber) {
    indicator.textContent = "📈 TOO HIGH ";
    indicator.style.fontSize = "400%";
    tries++;
    numberOfTries.textContent = tries;
    numberOfTries.style.fontSize = "400%";
  } else if (guess < secretNumber) {
    indicator.textContent = "📉 Too Low ";
    indicator.style.fontSize = "400%";
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
  //indicator.textContent = "new game";
  indicator.style.fontSize = "400%";
});

document.getElementById("btnReset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  document.getElementById("guess").value = "";
});
