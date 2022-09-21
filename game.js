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
  gameReset(){
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
