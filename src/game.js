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

  trackMoves() {

    var humanFighter = this.human.takeTurn("earth")
    console.log("1st", this.human)
    // console.log("human", humanFighter)
    console.log("2nd", this.human.fighter)
    this.gameBoard.push(this.human.fighter);
    // this.gameBoard.push(this.computer.takeTurn());
    return this.gameBoard;
  };
};
