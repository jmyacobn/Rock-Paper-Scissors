class Player {
  constructor(name, token, game) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = game;
  }

  takeTurn(game) {
    var randomIndex = Math.floor(Math.random() * game.fighters.length);
    this.fighter = game.fighters[randomIndex];
    return this.fighter;
  }
}
