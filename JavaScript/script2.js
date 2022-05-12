/* A modal that opens when the user clicks on the button. */
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const btnOpenModal = document.querySelector("#openModal");
const xCloseModal = document.querySelector("#closeModal");

btnOpenModal.addEventListener("click", () => {
  modal.style.display = "block";
  modalContent.style.top = 0;
});

xCloseModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// GLOBALS
const allChoices = ["scissors", "spock", "paper", "lizard", "rock"];
const startPage = document.querySelector("#startPage");
const arrChoices = startPage.querySelectorAll("div");
const resultPage = document.querySelector("#resultPage");
const containerScore = document.querySelectorAll(".score")[0];
const score = document.querySelector("#score");
const userIcon = resultPage.querySelector("#userIcon")
const houseIcon = resultPage.querySelector("#houseIcon")
const messageWhoWin = document.querySelector("#whoWin");
const playAgainButton = document.querySelector("#playAgain");

// START PLAY
const handleClick = (event) => {
  /* Adding a class to the body element. */
  document.body.classList.toggle("result")
  /* Removing the classes from the userIcon and houseIcon elements. */
  userIcon.classList.remove("scissors", "paper", "rock");
  houseIcon.classList.remove("scissors", "paper", "rock");
  playAgainButton.style.display = "none";
  messageWhoWin.style.display = "none";
  houseIcon.style.display = "none";

  /* Getting the data-choice attribute from the clicked element. */
  const userPlayerChoice = event.target.dataset.choice;
  const housePlayerIndex = Math.floor(Math.random() * 3);
  const housePlayerChoice = allChoices[housePlayerIndex];

  startPage.style.display = "none";
  resultPage.style.display = "block";
/* Adding the class of the user's choice to the userIcon element. */
  userIcon.classList.toggle(userPlayerChoice);
  let scoreTotal = 0;
  // PRINT SCORE
  let whoWin = () => {
    scoreTotal = parseInt(score.innerHTML);
    let showScoreTotal = () => {
      /* A function to change the background colour of the score board after a certain amount of time. */
      setTimeout(() => {
        score.innerHTML = scoreTotal;
        let bgScore = scoreTotal < 0 ? "hsl(0, 100%, 50%)" : scoreTotal == 0 ? "hsl(0, 0%, 100%)" : "rgb(183, 241, 183)";
        containerScore.style.backgroundColor = bgScore;
      }, 1000);
    };
    // GAME RULES CONDITIONS
    if (userPlayerChoice == housePlayerChoice) {
      messageWhoWin.innerHTML = "<div id=\"draw-message\">DRAW<div>";
    } else if (
      userPlayerChoice == "scissors" && (housePlayerChoice == "rock") ||

      userPlayerChoice == "paper" && (housePlayerChoice == "scissors") ||

      userPlayerChoice == "rock" && (housePlayerChoice == "paper")
    ) {
      messageWhoWin.innerHTML = "<div id=\"you-lose-message\">YOU LOSE</div>";
      scoreTotal = scoreTotal - 1;
      showScoreTotal();
    } else {
      messageWhoWin.innerHTML = "<div id=\"you-win-message\">YOU WIN</div>;";
      scoreTotal = scoreTotal + 1;
      showScoreTotal();
    }
  }

  setTimeout(() => {
    whoWin();
  }, 1000);

  setTimeout(() => {
    houseIcon.style.display = "block";
/* Adding the class of the house's choice to the houseIcon element. */
    houseIcon.classList.add(housePlayerChoice);
    setTimeout(() => {
      messageWhoWin.style.display = "block";
      playAgainButton.style.display = "block";
    }, 1000);
  }, 1000);
}

for (let el of arrChoices) {
  el.addEventListener("click", handleClick);
  el.addEventListener("keypress", handleClick);
}

playAgainButton.addEventListener("click", () => {
  document.body.classList.remove("result");
  startPage.style.display = "block";
  resultPage.style.display = "none";
});