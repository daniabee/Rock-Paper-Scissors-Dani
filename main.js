var playerForm = document.querySelector('.player-form-side');
var submitButton = document.querySelector('#submit');
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var playerSide = document.querySelector('.player-side');

var uniqueGameOption = document.querySelector('.unique-game');
var classicGameOption = document.querySelector('.classic-game');

var mainView = document.querySelector('.main-view');
var classicGameView = document.querySelector('.classic-view');
var uniqueGameView = document.querySelector('.unique-view');

var homeButton1 = document.querySelectorAll('.home')[0];
var homeButton2 = document.querySelectorAll('.home')[1];


//EVENT LISTENERS
submitButton.addEventListener('click', submitPlayerInfo);
uniqueGameOption.addEventListener('click', goToClassicView);
classicGameOption.addEventListener('click', goToUniqueView);
homeButton1.addEventListener('click', goHomeView);
homeButton2.addEventListener('click', goHomeView);

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
  }
}

function goToClassicView() {
  mainView.classList.add('hidden');
  uniqueGameView.classList.remove('hidden');
}

function goToUniqueView() {
  mainView.classList.add('hidden');
  classicGameView.classList.remove('hidden');
}

function goHomeView() {
  classicGameView.classList.add('hidden');
  uniqueGameView.classList.add('hidden');
  mainView.classList.remove('hidden');
}
