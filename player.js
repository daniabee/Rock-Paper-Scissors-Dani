var rock = 'rock';
var paper = 'paper';
var scissors = 'scissors';

class Player {
  constructor(name, token, wins){
    this.name = name;
    this.token = token;
    this.wins = wins;
  }
  
  takeTurn(fighter) {
    return fighter;
  }

  automatedTurn() {
    var fighter = randomFighter();
    if(fighter === 1) {
      return rock;
    }
    else if (fighter === 2) {
      return paper;
    } else {
      return scissors
    }
  }

}

function randomFighter() {
  var fighter = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  return fighter
}

// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage - only necessary if you choose the localStorage extension
// retrieveWinsFromStorage - only necessary if you choose the localStorage extension
// takeTurn
