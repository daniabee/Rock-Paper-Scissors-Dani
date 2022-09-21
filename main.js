var uniqueGameOption = document.querySelector('.unique-game');
var classicGameOption = document.querySelector('.classic-game');
var mainView = document.querySelector('.main-view');
var classicGameView = document.querySelector('.classic-view');
var uniqueGameView = document.querySelector('.unique-view');

//EVENT LISTENERS
uniqueGameOption.addEventListener('click', goToClassic);
classicGameOption.addEventListener('click', goToUnique);

//FUNCTIONS
function goToClassic() {
  mainView.classList.add('hidden');
  classicGameView.classList.remove('hidden');
}

function goToUnique() {
  mainView.classList.add('hidden');
  uniqueGameView.classList.remove('hidden');
}
