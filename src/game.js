class Game {
  constructor(gameSelection) {
    this.human = new Player("Player", "👩🏽");
    this.computer = new Player("Computer", "💻");
    this.gameBoard = [];
    this.gameSelection = gameSelection;
    this.fighters = [];
  }

  selectGame() {
    if (this.gameSelection === "classic") {
      this.fighters = ["earth", "water", "fire"]
    } else {
      this.fighters = ["earth", "water", "fire", "wind", "space"]
    };
  };
};
