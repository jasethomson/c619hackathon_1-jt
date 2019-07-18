$(document).ready(initializeApp);

var game = null;

function initializeApp() {
  $('.backOfTile').removeClass();
  var tileConfig = {
    height: 3,
    width: 3,
  }
  var squareConfig = {
    height: 4,
    width: 4
  }
  game = new MagicMaze(tileConfig, squareConfig);
  game.makeGameBoard();
  $('#gameContainer').on('click', clickToUnhideCard);
  var newPlayer = new Player();
  var redItem = new RedItem();
  var redExit = new RedExit();
}
function clickToUnhideCard(event) {
  var clickCurrentTile = $(event.target);
  console.log(clickCurrentTile);
  $(clickCurrentTile).removeClass('backOfTile');
}
