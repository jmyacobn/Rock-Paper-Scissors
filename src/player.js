class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = "";
  }

  takeTurn(selection) {
    this.fighter = selection;
  };
};
