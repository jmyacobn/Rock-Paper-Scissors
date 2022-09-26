// ~~~~~~~ Global Variables ~~~~~~~
var currentGame = new Game();

// ~~~~~~~ Query Selectors ~~~~~~~
var classicRules = document.querySelector(".classic-rules");
var deluxeRules = document.querySelector(".deluxe-rules");
var gameRulesDisplay = document.querySelector(".game-rules");
var selectFighterDisplay = document.querySelector(".select-fighter");
var classicFighters = document.querySelector(".select-fighter-classic");
var deluxeFighters = document.querySelector(".select-fighter-deluxe");
var fighterChoices = document.querySelectorAll(".fighter-selection");
var gameBoardHeader = document.querySelector(".game-board-header");
var resultsDisplay = document.querySelector(".results-display");
var playerStats = document.querySelector("#player-stats");
var computerStats = document.querySelector("#computer-stats");
var changeGameButton = document.querySelector(".change-game");

// ~~~~~~~ Event Listeners ~~~~~~~
classicRules.addEventListener("click", displayFighters);
deluxeRules.addEventListener("click", displayFighters);
for (var i = 0; i < fighterChoices.length; i++) {
  fighterChoices[i].addEventListener("click", playGame)
};
changeGameButton.addEventListener("click", chooseGameType);

// ~~~~~~~ Functions and Event Handlers ~~~~~~~
function displayFighters() {
  hide(gameRulesDisplay);
  show(selectFighterDisplay);
  show(classicFighters);
  hide(resultsDisplay);
  if (event.target.classList.contains("classic-rules") || event.target.parentElement.classList.contains("classic-rules")) {
    currentGame.selectGame("classic");
    gameBoardHeader.innerText = `Choose your fighter!`
  } else {
    currentGame.selectGame("deluxe");
    gameBoardHeader.innerText = `Choose your fighter!`
    show(deluxeFighters);
  };
};

function playGame(target) {
  var selectedFighter = event.target.id
  currentGame.human.takeTurn(currentGame, selectedFighter);
  currentGame.computer.takeTurn(currentGame);
  displayWinner();
  updateStats();
  if (currentGame.human.wins < 7 && currentGame.computer.wins < 7) {
    setTimeout(startNewRound, 2000);
  } else {
    setTimeout(resetScoreBoard, 2000);
    setTimeout(updateStats, 2000);
    setTimeout(chooseGameType, 2000);
  };
};

function displayWinner() {
  var winner = currentGame.winner
    if (winner === null) {
      gameBoardHeader.innerText = `😭 It's a draw! 😭`
    } else if (winner === this.human) {
      gameBoardHeader.innerText = `${winner.token} You won this round! ${winner.token}`
    } else {
      gameBoardHeader.innerText = `${winner.token} ${winner.name} won this round! ${winner.token}`
    };
    showGameFighters()
    hide(classicFighters);
    hide(deluxeFighters);
};

function updateStats() {
  playerStats.innerText = `Wins: ${currentGame.human.wins}`;
  computerStats.innerText = `Wins: ${currentGame.computer.wins}`;
};

function startNewRound () {
  currentGame.resetGameBoard();
  gameBoardHeader.innerText = `Choose your fighter!`;
    if (currentGame.gameSelection === "classic") {
      show(classicFighters);
      hide(resultsDisplay);
    } else {
      show(classicFighters);
      show(deluxeFighters);
      hide(resultsDisplay);
    };
};

function showGameFighters() {
  resultsDisplay.innerHTML = "";
  resultsDisplay.innerHTML += `
    <img class="fighter-selection" id=${currentGame.human.fighter} src="assets/${currentGame.human.fighter}.jpg" alt = ${currentGame.human.fighter} />
    <img class="fighter-selection" id=${currentGame.computer.fighter} src="assets/${currentGame.computer.fighter}.jpg" alt="${currentGame.computer.fighter}" />`;
    show(resultsDisplay);
    show(changeGameButton);
};

function chooseGameType() {
  show(gameRulesDisplay);
  hide(selectFighterDisplay);
  hide(changeGameButton);
};

function resetScoreBoard() {
  currentGame.human.resetWins(currentGame);
  currentGame.computer.resetWins(currentGame);
};

// ~~~~~~~ Helper Functions ~~~~~~~
function hide(element) {
  element.classList.add("hidden")
};

function show(element) {
  element.classList.remove("hidden")
};
