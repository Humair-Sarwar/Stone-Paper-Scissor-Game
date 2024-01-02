let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreDigit = document.querySelector("#user-score");
let compScoreDigit = document.querySelector("#comp-score");
let genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
let drawGame = () => {
  msg.innerText = "Game was Draw. Play Again.";
  msg.style.backgroundColor = "#081b31";
};
let showWin = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    if (userScore <= 10) {
      userScoreDigit.innerText = userScore;
      msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    }
  } else {
    compScore++;
    if (compScore <= 10) {
      compScoreDigit.innerText = compScore;
      msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  }
};
let playGame = (userChoice) => {
  let compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWin(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});