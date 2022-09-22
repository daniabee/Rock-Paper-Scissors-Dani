var uniqueGameOption = document.querySelector('.unique-game');
var classicGameOption = document.querySelector('.classic-game');
var mainView = document.querySelector('.main-view');
var classicGameView = document.querySelector('.classic-view');
var uniqueGameView = document.querySelector('.unique-view');
var homeButton1 = document.querySelectorAll('.home')[0];
var homeButton2 = document.querySelectorAll('.home')[1];


//EVENT LISTENERS
uniqueGameOption.addEventListener('click', goToClassicView);
classicGameOption.addEventListener('click', goToUniqueView);
homeButton1.addEventListener('click', goHomeView);
homeButton2.addEventListener('click', goHomeView);

//FUNCTIONS
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
