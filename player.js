var rock = 'rock';
var paper = 'paper';
var scissors = 'scissors';
var zombie = 'zombie';
var bomb = 'bomb';

class Player {
  constructor(name, token, wins){
    this.name = name;
    this.token = token;
    this.wins = wins;
  }

  takeTurn(fighter) {
    return fighter;
  }

  automatedTurnClassic() {
    var fighter = randomFighter(3,1);
    if(fighter === 1) {
      return rock;
    }
    else if (fighter === 2) {
      return paper;
    } else {
      return scissors
    }
  }

  automatedTurnUnique() {
    var fighter = randomFighter(5,1);
    if (fighter === 1) {
      return rock;
    }
    else if (fighter === 2) {
      return paper;
    }
    else if (fighter === 3) {
      return scissors
    }
    else if (fighter === 4) {
      return zombie
    } else {
      return bomb;
    }
  }

}

function randomFighter(max, min) {
  var fighter = Math.floor(Math.random() * (max - min + 1) + min);
  return fighter
}

// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage - only necessary if you choose the localStorage extension
// retrieveWinsFromStorage - only necessary if you choose the localStorage extension
// takeTurn
