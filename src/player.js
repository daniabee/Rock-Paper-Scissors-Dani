class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  takeTurn(fighter) {
    return fighter;
  }

  automatedTurnClassic() {
    var fighter = randomFighter(3,1);
    if(fighter === 1) {
      return 'rock';
    }
    else if (fighter === 2) {
      return 'paper';
    }
    else if (fighter === 3) {
      return 'scissors';
    }
  }

  automatedTurnUnique() {
    var fighter = randomFighter(5,1);
    if (fighter === 1) {
      return 'rock';
    }
    else if (fighter === 2) {
      return 'paper';
    }
    else if (fighter === 3) {
      return 'scissors'
    }
    else if (fighter === 4) {
      return 'zombie'
    }
    else if (fighter === 5) {
      return 'bomb';
    }
  }

  resetPayer(name, token,) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }
}

function randomFighter(max, min) {
  var fighter = Math.floor(Math.random() * (max - min + 1) + min);
  return fighter
}

var player1 = new Player();
var player2 = new Player();
