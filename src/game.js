class Game {
  constructor() {
    this.players = [];
    this.gameType = 'none chosen';
    this.gameCount = 0;
    this.gameCountClassic = 0;
    this.gameCountUnique = 0;
    this.gameHistory = [];
}

  addPlayers(player1, player2) {
    this.players.push(player1);
    this.players.push(player2);
  }

  chooseGameType(gameOption) {
    if (gameOption === 'unique') {
      this.gameType = 'unique'
    }
    else if (gameOption === 'classic'){
      this.gameType = 'classic'
    }
  }

  playRoundClassic(fighter) {
    this.gameCount++;
    this.gameCountClassic++;
    var player1Fighter = this.players[0].takeTurn(fighter);
    var player2Fighter = this.players[1].automatedTurnClassic();

    if (player1Fighter === player2Fighter) {
      this.gameHistory.push(0);
      return 'You tied!'
    }
    else if (player1Fighter === 'rock' && player2Fighter === 'scissors') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'rock' && player1Fighter === 'scissors') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'paper' && player2Fighter === 'rock') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'paper' && player1Fighter === 'rock') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'scissors' && player2Fighter === 'paper') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'scissors' && player1Fighter === 'paper') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
  }

  playRoundUnique(fighter) {
    this.gameCount++;
    this.gameCountUnique++;
    var player1Fighter = this.players[0].takeTurn(fighter);
    var player2Fighter = this.players[1].automatedTurnUnique();

    if (player1Fighter === player2Fighter) {
      this.gameHistory.push(0);
      return 'You tied!'
    }
    else if (player1Fighter === 'scissors' && player2Fighter === 'paper') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'scissors' && player1Fighter === 'paper') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'paper' && player2Fighter === 'rock') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'paper' && player1Fighter === 'rock') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'rock' && player2Fighter === 'zombie') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'rock' && player1Fighter === 'zombie') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'zombie' && player2Fighter === 'bomb') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'zombie' && player1Fighter === 'bomb') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'bomb' && player2Fighter === 'scissors') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'bomb' && player1Fighter === 'scissors') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'scissors' && player2Fighter === 'zombie') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'scissors' && player1Fighter === 'zombie') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'zombie' && player2Fighter === 'paper') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'zombie' && player1Fighter === 'paper') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'paper' && player2Fighter === 'bomb') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'paper' && player1Fighter === 'bomb') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'bomb' && player2Fighter === 'rock') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'bomb' && player1Fighter === 'rock') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
    else if (player1Fighter === 'rock' && player2Fighter === 'scissors') {
      this.gameHistory.push(1);
      this.players[0].wins += 1;
      return 'Player one wins!'
    }
    else if (player2Fighter === 'rock' && player1Fighter === 'scissors') {
      this.gameHistory.push(2);
      this.players[1].wins += 1;
      return 'Player two wins!'
    }
  }

  gameReset() {
    this.players = [];
    this.gameType = 'none chosen';
    this.gameCount = 0;
    this.gameHistory = [];
  }
};

var newGame = new Game();
