class Game {
  constructor(gameSelection) {
    this.human = new Player("Player", "👩🏽");
    this.computer = new Player("Computer", "💻");
    this.gameBoard = [];
    this.gameSelection = gameSelection;
    this.fighters = [];
  }

  selectGame(gameSelection) {
    this.gameSelection = gameSelection;
    if (this.gameSelection === "classic") {
      this.fighters = ["earth", "water", "fire"]
    } else {
      this.fighters = ["earth", "water", "fire", "wind", "space"]
    };
  };

  checkDraw() {
    if (this.gameBoard[0] === this.gameBoard[1]) {
      return true;
      //dispaly push message in DOM
      //use timeout
    } else {
      return false;
    };
  };
};

checkWin() {
  if () {
    this.human.wins ++;
  }
}

resentGameBoard () {
  this.gameBoard = [];
}

// else if (humanFighter === "rock" && computerFighter === "earth" || computerFighter === "wind") || (humanFighter === "water" && computerFighter === "fire" || computerFighter === "space") || (humanFighter === "earth" && computerFighter === "water" || computerFighter === "space") || (humanFighter === "wind" && computerFighter === "water" || computerFighter === "earth") || (humanFighter === "space" && computerFighter === "wind" || computerFighter === "fire") --> human wins
// else --> computer wins

// human wins//
//   this.gameBoard[0] === "fire" && this.gameBoard[1] === "earth" || this.gameBoard[1] === "wind"
// }
//   this.gameBoard[0] === "water" && this.gameBoard[1] === "fire" || this.gameBoard[1] === "space"
// }
//   this.gameBoard[0] === "earth" && this.gameBoard[1] === "water" || this.gameBoard[1] === "space"
// }
//   this.gameBoard[0] === "wind" && this.gameBoard[1] === "water" || this.gameBoard[1] === "earth"
// }
//   this.gameBoard[0] === "space" && this.gameBoard[1] === "wind" || this.gameBoard[1] === "fire"
// }
// this.human.wins ++
//this.computer.wins ++
