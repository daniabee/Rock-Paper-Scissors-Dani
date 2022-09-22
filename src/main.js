var playerForm = document.querySelector('.player-form-side');
var submitButton = document.querySelector('#submit');
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var playerSide = document.querySelector('.player-side');
var gameOptions = document.querySelector('.options-container');

var uniqueGameOption = document.querySelector('.unique-game');
var classicGameOption = document.querySelector('.classic-game');

var mainView = document.querySelector('.main-view');
var classicGameView = document.querySelector('.classic-view');
var uniqueGameView = document.querySelector('.unique-view');

var homeButton1 = document.querySelectorAll('.home')[0];
var homeButton2 = document.querySelectorAll('.home')[1];

var fightersClassic = document.querySelectorAll('.fighter-container')[0];
var fightersUnique = document.querySelectorAll('.fighter-container')[1];

var playerWinCount = document.querySelector('.player-wins');
var computerWinCount = document.querySelector('.computer-wins');


//EVENT LISTENERS
submitButton.addEventListener('click', submitPlayerInfo);
uniqueGameOption.addEventListener('click', goToUniqueView);
classicGameOption.addEventListener('click', goToClassicView);
homeButton1.addEventListener('click', goHomeView);
homeButton2.addEventListener('click', goHomeView);
fightersClassic.addEventListener('click', playClassicGame);
fightersUnique.addEventListener('click', playUniqueGame);

//FUNCTIONS
function submitPlayerInfo() {
  if (playerInput.value === '') {
    try {
      throw new Error('Whoops! Add a name, please.');
    } catch (e) {
      console.error(`${e.name}: ${e.message}`);
    }
  } else {
    playerForm.classList.add('hidden');
    playerSide.classList.remove('hidden');
    playerName.innerText = `${playerInput.value}`;
    gameOptions.classList.remove('hidden');

    player1.name = `${playerInput.value}`;
    player2.name = `Computer`;
    newGame.addPlayers(player1,player2);
  }
}

function goToClassicView() {
  newGame.chooseGameType('classic');
  mainView.classList.add('hidden');
  classicGameView.classList.remove('hidden');
}

function goToUniqueView() {
  newGame.chooseGameType('unique');
  mainView.classList.add('hidden');
  uniqueGameView.classList.remove('hidden');
}

function goHomeView() {
  classicGameView.classList.add('hidden');
  uniqueGameView.classList.add('hidden');
  mainView.classList.remove('hidden');
}

function playClassicGame() {
  if (event.target.classList.contains('rock')) {
    console.log(newGame.playRoundClassic('rock'));
  }
  else if (event.target.classList.contains('paper')) {
    console.log(newGame.playRoundClassic('paper'));
  }
  else if (event.target.classList.contains('scissors')) {
    console.log(newGame.playRoundClassic('scissors'));
  }
  playerWinCount.innerText = `${newGame.players[0].wins}`
  computerWinCount.innerText = `${newGame.players[1].wins}`
}

function playUniqueGame() {
  if (event.target.classList.contains('rock')) {
    console.log(newGame.playRoundUnique('rock'));
  }
  else if (event.target.classList.contains('paper')) {
    console.log(newGame.playRoundUnique('paper'));
  }
  else if (event.target.classList.contains('scissors')) {
    console.log(newGame.playRoundUnique('scissors'));
  }
  else if (event.target.classList.contains('zombie')) {
    console.log(newGame.playRoundUnique('zombie'));
  }
  else if (event.target.classList.contains('bomb')) {
    console.log(newGame.playRoundUnique('bomb'));
  }
  playerWinCount.innerText = `${newGame.players[0].wins}`
  computerWinCount.innerText = `${newGame.players[1].wins}`
}
