// ~~~~~~~ Global Variables ~~~~~~~
var currentGame = new Game();

// ~~~~~~~ Query Selectors ~~~~~~~
var classicRules = document.querySelector(".classic-rules");
var deluxeRules = document.querySelector(".deluxe-rules");
var gameRulesDisplay = document.querySelector(".game-rules");
var selectFighterDisplay = document.querySelector(".select-fighter");
var classicFighters = document.querySelector(".select-fighter-classic");
var deluxeFighters = document.querySelector(".select-fighter-deluxe");
var fighterChoices = document.querySelectorAll('.fighter-selection');
var gameBoardHeader = document.querySelector('.game-board-header');
var resultsDisplay = document.querySelector('.results-display');
var playerStats = document.querySelector('#player-stats');
var computerStats = document.querySelector('#computer-stats');


// ~~~~~~~ Event Listeners ~~~~~~~
classicRules.addEventListener("click", displayClassicFighters);
deluxeRules.addEventListener("click", displayDeluxeFighters);
for (var i = 0; i < fighterChoices.length; i++) {
  fighterChoices[i].addEventListener("click", playGame)
};

// ~~~~~~~ Functions and Event Listeners ~~~~~~~
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
  hide(classicFighters);
  hide(deluxeFighters);
  updateStats();
  setTimeout(startNewGame, 2000);
}

function displayWinner() {
  var winner = currentGame.winner
    if (winner === null) {
      gameBoardHeader.innerText = `😭 It's a draw! 😭`
    } else if (winner === this.human) {
      gameBoardHeader.innerText = `${winner.token} You won this round! ${winner.token}`
    } else {
      gameBoardHeader.innerText = `${winner.token} ${winner.name} won this round! ${winner.token}`
    }
    resultsDisplay.innerHTML = "";
    resultsDisplay.innerHTML += `
    <img class="fighter-selection" id=${currentGame.human.fighter} src="assets/${currentGame.human.fighter}.jpg" alt = ${currentGame.human.fighter} />
    <img class="fighter-selection" id=${currentGame.computer.fighter} src="assets/${currentGame.computer.fighter}.jpg" alt="${currentGame.computer.fighter}" />`
    show(resultsDisplay);
}

function updateStats() {
  playerStats.innerText = `Wins: ${currentGame.human.wins}`
  computerStats.innerText = `Wins: ${currentGame.computer.wins}`
}

function startNewGame () {
  currentGame.resetGameBoard();
  gameBoardHeader.innerText = `Choose your fighter!`
  if (currentGame.gameSelection === "classic") {
    show(classicFighters);
    hide(resultsDisplay);
  } else {
    show(classicFighters);
    show(deluxeFighters);
    hide(resultsDisplay);
  }
}

// ~~~~~~~ Helper Functions ~~~~~~~
function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
