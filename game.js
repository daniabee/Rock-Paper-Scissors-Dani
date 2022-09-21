class Game {
  constructor() {
    this.players = [];
    this.gameType = 'none chosen';
    this.gameCount = 0;
    this.gameHistory = [];
    //if player 1 wins, push a 1, if player 2 wins push a 2. Draw = 0;
}

  addPlayers(player1, player2) {
    this.players.push(player1);
    this.players.push(player2);
  }

  chooseGameType(gameOption) {
    if (!gameOption === 'classic') {
      this.gameType = 'unique'
    } else {
      this.gameType = 'classic'
    }
  }

  playRoundClassic() {
    this.gameCount++;
    var player1Fighter = this.players[0].takeTurn();
    var player2Fighter = this.players[1].takeTurn();

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

  playRoundUnique() {
    
  }

  gameReset() {
    this.players = [];
    this.gameType = 'none chosen';
    this.gameCount = 0;
    this.gameHistory = [];
  }
}

// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
