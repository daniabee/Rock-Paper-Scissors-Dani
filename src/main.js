var playerForm = document.querySelector('.form');
var submitButton = document.querySelector('#submit');
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var playerSide = document.querySelector('.player-side');
var computerSide = document.querySelector('.computer-side');
var subTitle = document.querySelector('.subtitle')
var gameOptions = document.querySelector('.options')
var uniqueGameOption = document.querySelector('.unique-game');
var classicGameOption = document.querySelector('.classic-game');
var mainView = document.querySelector('.main-view');
var classicGameView = document.querySelector('.classic-view');
var uniqueGameView = document.querySelector('.unique-view');
var homeButton1 = document.querySelectorAll('.home')[0];
var homeButton2 = document.querySelectorAll('.home')[1];
var fightersClassic = document.querySelectorAll('.fighter-container')[0];
var fightersUnique = document.querySelectorAll('.fighter-container')[1];
var playerWinCount = document.querySelector('#player-wins');
var computerWinCount = document.querySelector('#computer-wins');
var animationCountClassic = document.querySelector('.count-animation-classic');
var animationCountUnique = document.querySelector('.count-animation-unique');
var outcomeComputerDisplay = document.querySelector('#display-fighter-computer-side');
var outcomePlayerDisplay = document.querySelector('#display-fighter-player-side');
var resetButton = document.querySelector('.reset-game');
var instructionsUnique = document.querySelector('#instructions1');

//EVENT LISTENERS
submitButton.addEventListener('click', submitPlayerInfo);
playerInput.addEventListener('keydown', function(event) {
  if (event.key === "Shift") {
    submitPlayerInfo()
  }
});

gameOptions.addEventListener('click', function(event) {
  if (event.target.classList.contains('classic-game')) {
    goToClassicView();
  }
  else if(event.target.classList.contains('unique-game')) {
    goToUniqueView();
  }
});

homeButton1.addEventListener('click', goHomeView);
homeButton2.addEventListener('click', goHomeView);
fightersClassic.addEventListener('click', playClassicGame);
fightersUnique.addEventListener('click', playUniqueGame);
resetButton.addEventListener('click', resetGame);

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

    player1.resetPayer(`${playerInput.value}`, 'Player 1')
    player2.resetPayer('Computer', 'Player 2')
    gameData.addPlayers(player1,player2);

    changeInnertext(playerName, player1.name.toUpperCase())

    show(gameOptions);
    show(subTitle);
    show(resetButton);

    changeWinCountDisplay();
  }
}

function goToClassicView() {
  gameData.chooseGameType('classic');
  hide(mainView);
  show(classicGameView);
}

function goToUniqueView() {
  gameData.chooseGameType('unique');
  hide(mainView);
  show(uniqueGameView)
}

function goHomeView() {
  hideTemporarily(outcomePlayerDisplay);
  hideTemporarily(outcomeComputerDisplay);
  hide(classicGameView);
  hide(uniqueGameView);
  show(mainView);
}

function playClassicGame() {
  hideTemporarily(outcomePlayerDisplay);
  hideTemporarily(outcomeComputerDisplay);
  hide(fightersClassic);
  show(animationCountClassic);
  var outcome;

  if (event.target.classList.contains('rock')) {
    outcome = gameData.playRoundClassic('rock');
  }
  else if (event.target.classList.contains('paper')) {
    outcome = gameData.playRoundClassic('paper');
  }
  else if (event.target.classList.contains('scissors')) {
    outcome = gameData.playRoundClassic('scissors');
  }

  changeInnertext(outcomePlayerDisplay, outcome.toUpperCase());
  changeInnertext(outcomeComputerDisplay, outcome.toUpperCase());

  setTimeout(showTemporarily, 5000, outcomePlayerDisplay);
  setTimeout(showTemporarily, 5000, outcomeComputerDisplay);
  setTimeout(changeWinCountDisplay, 5000);
  setTimeout(show, 5100, fightersClassic);
  setTimeout(hide, 5100, animationCountClassic);
}

function playUniqueGame() {
  hide(instructionsUnique);
  hideTemporarily(outcomePlayerDisplay);
  hideTemporarily(outcomeComputerDisplay);
  hide(fightersUnique);
  show(animationCountUnique);
  var outcome;

  if (event.target.classList.contains('rock')) {
    outcome = gameData.playRoundUnique('rock')
  }
  else if (event.target.classList.contains('paper')) {
    outcome = gameData.playRoundUnique('paper')
  }
  else if (event.target.classList.contains('scissors')) {
    outcome = gameData.playRoundUnique('scissors')
  }
  else if (event.target.classList.contains('zombie')) {
    outcome = gameData.playRoundUnique('zombie')
  }
  else if (event.target.classList.contains('bomb')) {
    outcome = gameData.playRoundUnique('bomb')
  }

  changeInnertext(outcomePlayerDisplay, outcome.toUpperCase());
  changeInnertext(outcomeComputerDisplay, outcome.toUpperCase());

  setTimeout(showTemporarily, 5000, outcomePlayerDisplay);
  setTimeout(showTemporarily, 5000, outcomeComputerDisplay);
  setTimeout(changeWinCountDisplay, 5000);
  setTimeout(show, 5100, instructionsUnique);
  setTimeout(show, 5100, fightersUnique);
  setTimeout(hide, 5100, animationCountUnique);
}

function resetGame() {
  gameData.gameReset();
  show(playerForm);
  hide(playerSide);
  hide(computerSide);
  show(submitButton);
  hide(gameOptions);
  hide(subTitle);
  hide(resetButton);
  playerInput.value = '';
}

function hide(element) {
  element.classList.add('hidden');
}

function hideTemporarily(element) {
  element.classList.add('temporary-hidden');
}

function showTemporarily(element) {
  element.classList.remove('temporary-hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function changeWinCountDisplay() {
  changeInnertext(playerWinCount, gameData.players[0].wins);
  changeInnertext(computerWinCount, gameData.players[1].wins)
}

function changeInnertext(elementChange, text) {
  elementChange.innerText = `${text}`
}
