class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = "";
  };

  takeTurn(game, selection) {
    if (this.name === "Computer") {
      var randomIndex = Math.floor(Math.random() * game.fighters.length);
      this.fighter = game.fighters[randomIndex];
      game.gameBoard.push(game.fighters[randomIndex]);
      game.checkWin();
    } else {
      this.fighter = selection;
      game.gameBoard.push(selection);
    };
  };
};
