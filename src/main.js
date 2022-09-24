// ~~~~~~~ Global Variables ~~~~~~~
var currentGame = new Game();

// ~~~~~~~ Query Selectors ~~~~~~~
var classicRules = document.querySelector(".classic-rules");
var deluxeRules = document.querySelector(".deluxe-rules");
var gameRulesDisplay = document.querySelector(".game-rules");
var selectFighterDisplay = document.querySelector(".select-fighter");
var deluxeFighters = document.querySelector(".select-fighter-deluxe");
var fighterChoices = document.querySelectorAll('.fighter-selection');
var resultsDisplay = document.querySelector('.results-display');
var gameBoardHeader = document.querySelector('.game-board-header');
var playerStats = document.querySelectorAll('#player-stats');
var computerStats = document.querySelectorAll('#computer-stats');


// ~~~~~~~ Event Listeners ~~~~~~~
classicRules.addEventListener("click", displayClassicFighters);
deluxeRules.addEventListener("click", displayDeluxeFighters);
for (var i = 0; i < fighterChoices.length; i++) {
  fighterChoices[i].addEventListener("click", playGame)
};

// ~~~~~~~ Functions and Event Listeners ~~~~~~~
function startNewGame () {
  currentGame.resetGameBoard();
  gameBoardHeader.innerText = `Choose your fighter!`
  if (currentGame.gameSelection === "classic") {
    displayClassicFighters();
  } else {
    displayDeluxeFighters();
  }
}

function displayClassicFighters() {
  currentGame.selectGame("classic");
  hide(gameRulesDisplay);
  show(selectFighterDisplay);
}

function displayDeluxeFighters() {
  currentGame.selectGame("deluxe");
  hide(gameRulesDisplay);
  show(selectFighterDisplay);
  show(deluxeFighters);
}

function playGame(target) {
  var selectedFighter = event.target.id
  currentGame.human.takeTurn(currentGame, selectedFighter);
  currentGame.computer.takeTurn(currentGame);
  displayWinner();
  updateStats();
  setTimeout(startNewGame, 2000);
}

function displayWinner() {
  winner = currentGame.checkWin()
    if (winner === null) {
      gameBoardHeader.innerText = `😭 It's a draw! 😭`
    } else if (winner === this.human) {
      gameBoardHeader.innerText = `${winner.token} You won this round! ${winner.token}`
    } else {
      gameBoardHeader.innerText = `${winner.token} ${winner.name} won this round! ${winner.token}`
    }
}

function updateStats() {
  playerStats.innerText = `Wins: ${currentGame.human.wins}`
  computerStats.innerText = `Wins: ${currentGame.computer.wins}`
}

// ~~~~~~~ Helper Functions ~~~~~~~
function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
