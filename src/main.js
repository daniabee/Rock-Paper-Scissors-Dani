var playerForm = document.querySelector('.form');
var submitButton = document.querySelector('#submit');
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var playerSide = document.querySelector('.player-side');
var computerSide = document.querySelector('.computer-side');
var subTitle = document.querySelector('.subtitle');
var gameOptions = document.querySelector('.options');
var uniqueGameOption = document.querySelector('.unique-game');
var classicGameOption = document.querySelector('.classic-game');
var mainView = document.querySelector('.main-view');
var classicGameView = document.querySelector('.classic-view');
var uniqueGameView = document.querySelector('.unique-view');
var homeButtonClassic = document.querySelector('#home-from-classic');
var homeButtonUnique= document.querySelector('#home-from-unique');
var fightersClassic = document.querySelectorAll('.fighter-container')[0];
var fightersUnique = document.querySelectorAll('.fighter-container')[1];
var playerWinCount = document.querySelector('#player-wins');
var computerWinCount = document.querySelector('#computer-wins');
var animationLoserClassic = document.querySelector('#count-animation-loser-classic');
var animationWinnerClassic = document.querySelector('#count-animation-winner-classic');
var animationTieClassic = document.querySelector('#count-animation-tie-classic');
var animationLoserUnique = document.querySelector('#count-animation-loser-unique');
var animationWinnerUnique = document.querySelector('#count-animation-winner-unique');
var animationTieUnique = document.querySelector('#count-animation-tie-unique');
var outcomeComputerDisplay = document.querySelector('#display-fighter-computer-side');
var outcomePlayerDisplay = document.querySelector('#display-fighter-player-side');
var resetButton = document.querySelector('.reset-game');
var instructionsButton = document.querySelector('#instructions-button');
var instructionsPage = document.querySelector('.instructions-page');
var mainPage = document.querySelector('.main-container');
var instructionsToHome = document.querySelector('#instructions-to-home-button');

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

homeButtonClassic.addEventListener('click', goHomeView);
homeButtonUnique.addEventListener('click', goHomeView);
fightersClassic.addEventListener('click', playClassicGame);
fightersUnique.addEventListener('click', playUniqueGame);
resetButton.addEventListener('click', resetGame);
instructionsButton.addEventListener('click', viewInstructions);
instructionsToHome.addEventListener('click', goHomeView);

//FUNCTIONS
function submitPlayerInfo() {
  if (playerInput.value === '') {
    try {
      throw new Error('Add a name, please.');
    } catch(e) {
      console.error(`${e.name}: ${e.message}`);
    }
  } else {
    hide(playerForm);
    hide(submitButton);
    show(playerSide);
    show(computerSide);
    show(gameOptions);
    show(subTitle);
    show(resetButton);
    player1.resetPayer(`${playerInput.value}`, 'Player 1');
    player2.resetPayer('Computer', 'Player 2');
    gameData.addPlayers(player1, player2);
    changeInnertext(playerName, player1.name.toUpperCase());
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
  hide(instructionsPage);
  show(mainView);
  show(mainPage);
}

function playClassicGame() {
  hideTemporarily(outcomePlayerDisplay);
  hideTemporarily(outcomeComputerDisplay);
  hide(fightersClassic);
  var outcome;

  if (event.target.classList.contains('rock')) {
    outcome = gameData.playRoundClassic('rock');
  }
  else if (event.target.classList.contains('paper')) {
    outcome = gameData.playRoundClassic('paper');
  } else {
    outcome = gameData.playRoundClassic('scissors');
  }

  if (outcome === 'Player one wins!') {
    show(animationWinnerClassic);
  }
  else if (outcome === 'Player two wins!') {
    show(animationLoserClassic);
  } else {
    show(animationTieClassic);
  }

  changeInnertext(outcomePlayerDisplay, player1.fighter.toUpperCase());
  changeInnertext(outcomeComputerDisplay, player2.fighter.toUpperCase());
  setTimeout(showTemporarily, 6100, outcomePlayerDisplay);
  setTimeout(showTemporarily, 6100, outcomeComputerDisplay);
  setTimeout(changeWinCountDisplay, 7200);
  setTimeout(show, 7200, fightersClassic);
  setTimeout(hide, 7200, animationTieClassic);
  setTimeout(hide, 7200, animationWinnerClassic);
  setTimeout(hide, 7200, animationLoserClassic);
}

function playUniqueGame() {
  hideTemporarily(outcomePlayerDisplay);
  hideTemporarily(outcomeComputerDisplay);
  hide(fightersUnique);
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
  } else {
    outcome = gameData.playRoundUnique('bomb')
  }

  if (outcome === 'Player one wins!') {
    show(animationWinnerUnique);
  }
  else if (outcome === 'Player two wins!') {
    show(animationLoserUnique);
  } else {
    show(animationTieUnique);
  }

  changeInnertext(outcomePlayerDisplay, player1.fighter.toUpperCase());
  changeInnertext(outcomeComputerDisplay, player2.fighter.toUpperCase());
  setTimeout(showTemporarily, 6100, outcomePlayerDisplay);
  setTimeout(showTemporarily, 6100, outcomeComputerDisplay);
  setTimeout(changeWinCountDisplay, 7200);
  setTimeout(show, 7200, fightersUnique);
  setTimeout(hide, 7200, animationTieUnique);
  setTimeout(hide, 7200, animationWinnerUnique);
  setTimeout(hide, 7200, animationLoserUnique);
}

function resetGame() {
  gameData.gameReset();
  show(playerForm);
  show(submitButton);
  hide(playerSide);
  hide(computerSide);
  hide(gameOptions);
  hide(subTitle);
  hide(resetButton);
  playerInput.value = '';
}

function viewInstructions() {
  hide(mainPage);
  show(instructionsPage);
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
  changeInnertext(computerWinCount, gameData.players[1].wins);
}

function changeInnertext(elementChange, text) {
  elementChange.innerText = `${text}`
}
