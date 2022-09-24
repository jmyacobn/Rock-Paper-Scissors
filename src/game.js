class Game {
  constructor() {
    this.human = new Player("Player", "👩🏽");
    this.computer = new Player("Computer", "💻");
    this.gameBoard = [];
    this.fighters = [];
  }

  selectGame(gameSelection) {
    this.gameSelection = gameSelection;
    if (this.gameSelection === "classic") {
      this.fighters = ["earth", "water", "fire"]
    } else {
      this.fighters = ["earth", "water", "fire", "wind", "cat"]
    };
  };

  checkWin() {
    var winner;
    if (this.gameBoard[0] === this.gameBoard[1]) {
      winner = null;
    } else if ((this.gameBoard[0] === "fire" && this.gameBoard[1] === "earth" || this.gameBoard[1] === "wind") || (this.gameBoard[0] === "water" && this.gameBoard[1] === "fire" || this.gameBoard[1] === "cat") || (this.gameBoard[0] === "earth" && this.gameBoard[1] === "water" || this.gameBoard[1] === "cat") || (this.gameBoard[0] === "wind" && this.gameBoard[1] === "water" || this.gameBoard[1] === "earth") || (this.gameBoard[0] === "cat" && this.gameBoard[1] === "wind" || this.gameBoard[1] === "fire")) {
      winner = this.human;
      this.human.wins ++;
    } else {
      winner = this.computer;
      this.computer.wins ++;
    };
    return winner;
  };

  resetGameBoard () {
    this.gameBoard = [];
  };
};
