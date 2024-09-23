const ruleBook = document.querySelector(".rule-book");
const hideRuleBook = document.querySelector(".rule-book.hide");
const rules = document.querySelector(".rules");
const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".result");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const next = document.getElementById("next");
const ani1 = document.querySelector(".animation1");
const ani2 = document.querySelector(".animation2");

const aganistPC = document.querySelector(".winLose");
const container1 = document.querySelector(".conatiner1");
const triangle = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const resBtn = document.querySelector(".res-btn");
const ruleBtn = document.querySelector("#rule-btn");

//scores
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

let getScore1 = localStorage.getItem("computerScore");
let getScore2 = localStorage.getItem("yourScore");

score1.textContent = getScore1 !== null ? getScore1 : 0;
score2.textContent = getScore2 !== null ? getScore2 : 0;

ruleBook.style.display = "none";
container3.style.display = "none";
container4.style.display = "none";
triangle.style.display = "";
next.style.display = "none";

let userPicked;

buttons.forEach((x) => {
  x.addEventListener("click", function repeat() {
    const img = getComputedStyle(x).getPropertyValue("background-image");
    const border = getComputedStyle(x).getPropertyValue("border-color");
    one.style.backgroundImage = img;
    one.style.borderColor = border;
    triangle.style.display = "none";
    container3.style.display = "";
    userPicked = x.id;

    const arr = ["rock", "paper", "scissor"];
    const option = arr[Math.floor(Math.random() * 3)];
    const r = document.getElementById(`${option}`);
    var pcPicked = r.id;
    if (pcPicked === "rock") {
      two.style.backgroundImage = "var(--rock)";
      two.style.borderColor = "var(--bx3)";
    } else if (pcPicked === "paper") {
      two.style.backgroundImage = "var(--paper)";
      two.style.borderColor = "var(--bx1)";
    } else if (pcPicked === "scissor") {
      two.style.backgroundImage = "var(--scissors)";
      two.style.borderColor = "var(--bx2)";
    }
    const ResText = play(userPicked, pcPicked);
    result.innerHTML = ResText;
    playGame(ResText);
  });
});

function playGame(ResText) {
  if (ResText === "TIE UP") {
    resBtn.textContent = "REPLAY";
    aganistPC.innerHTML = "";
    next.style.display = "none";
    ani1.style.display = "";
    ani2.style.display = "";
  }
  //localstorage
  if (ResText === "YOU WIN") {
    score2.textContent = parseInt(score2.textContent) + 1;
    localStorage.setItem("yourScore", score2.textContent);
    resBtn.textContent = "PLAY AGAIN";
    ani1.style.display = "";
    ani2.style.display = "none";
    aganistPC.innerHTML = "AGANIST PC";
    next.style.display = "";
  } else if (ResText === "YOU LOSE") {
    score1.textContent = parseInt(score1.textContent) + 1;
    localStorage.setItem("computerScore", score1.textContent);
    resBtn.textContent = "PLAY AGAIN";
    aganistPC.innerHTML = "AGANIST PC";
    ani2.style.display = "";
    ani1.style.display = "none";
    next.style.display = "none";
  }
}

function play(userPicked, pcPicked) {
  if (
    (userPicked === "rock" && pcPicked === "scissor") ||
    (userPicked === "scissor" && pcPicked === "paper") ||
    (userPicked === "paper" && pcPicked === "rock")
  ) {
    return "YOU WIN";
  } else if (userPicked === pcPicked) {
    return "TIE UP";
  } else {
    return "YOU LOSE";
  }
}

const userChoice = () => {
  triangle.style.display = "none";
  container3.style.display = "";
};

function fun() {
  if (ruleBook.style.display === "none") {
    ruleBook.style.display = "";
  } else {
    ruleBook.style.display = "none";
  }
}

function playAgain() {
  container4.style.display = "none";
  container1.style.display = "";
  triangle.style.display = "";
  container3.style.display = "none";
  next.style.display = "none";
}

function nextButton() {
  container4.style.display = "";
  container1.style.display = "none";
  container3.style.display = "none";
  triangle.style.display = "none";
  next.style.display = "none";
}
