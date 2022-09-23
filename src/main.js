var playerForm = document.querySelector('.form');
var submitButton = document.querySelector('#submit');
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var playerSide = document.querySelector('.player-side');
var computerSide = document.querySelector('.computer-side');
var subTitle = document.querySelectorAll('.options')[0];
var gameOptions = document.querySelectorAll('.options')[1];
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
var animationCountClassic = document.querySelector('.count-animation-classic');


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
    hide(playerForm);
    show(playerSide);
    show(computerSide);
    hide(submitButton);

    playerName.innerText = `${playerInput.value.toUpperCase()}`;
    player1.name = `${playerInput.value.toUpperCase()}`;
    player2.name = `Computer`;
    newGame.addPlayers(player1,player2);

    show(gameOptions);
    show(subTitle);
  }
}

function goToClassicView() {
  newGame.chooseGameType('classic');
  hide(mainView);
  show(classicGameView);
}

function goToUniqueView() {
  newGame.chooseGameType('unique');
  hide(mainView);
  show(uniqueGameView)
}

function goHomeView() {
  hide(classicGameView);
  hide(uniqueGameView);
  show(mainView);
}

function playClassicGame() {
  hide(fightersClassic);
  show(animationCountClassic);
  if (event.target.classList.contains('rock')) {
    console.log(newGame.playRoundClassic('rock'));
  }
  else if (event.target.classList.contains('paper')) {
    console.log(newGame.playRoundClassic('paper'));
  }
  else if (event.target.classList.contains('scissors')) {
    console.log(newGame.playRoundClassic('scissors'));
  }
  setTimeout(changeWinCountDisplay, 5000);
  setTimeout(show, 5600, fightersClassic);
  setTimeout(hide, 5500, animationCountClassic);
}

function playUniqueGame() {
  hide(fightersUnique);
  show(animationCountUnique);
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
  setTimeout(changeWinCountDisplay, 5000);
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function changeWinCountDisplay() {
  playerWinCount.innerText = `${newGame.players[0].wins}`
  computerWinCount.innerText = `${newGame.players[1].wins}`
}
