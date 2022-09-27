class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = '';
  }

  takeTurn(fighter) {
    this.fighter = fighter;
    return this.fighter;
  }

  automatedTurnClassic() {
    var fighter = randomFighter(3, 1);
    if(fighter === 1) {
      this.fighter = 'rock';
    }
    else if (fighter === 2) {
      this.fighter = 'paper';
    } else {
      this.fighter = 'scissors';
    }
    return this.fighter;
  }

  automatedTurnUnique() {
    var fighter = randomFighter(5, 1);
    if (fighter === 1) {
      this.fighter = 'rock';
    }
    else if (fighter === 2) {
      this.fighter = 'paper';
    }
    else if (fighter === 3) {
      this.fighter = 'scissors'
    }
    else if (fighter === 4) {
      this.fighter = 'zombie'
    } else {
      this.fighter = 'bomb';
    }
    return this.fighter;
  }

  resetPayer(name, token,) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = '';
  }
}

function randomFighter(max, min) {
  var fighter = Math.floor(Math.random() * (max - min + 1) + min);
  return fighter
}

var player1 = new Player();
var player2 = new Player();
