$(document).ready(initializeApp);

var game = null;

function initializeApp() {
  var magicMazeConfig = {
    height: 3,
    width: 3,
  }
  var pawnConfig = {
    height: 4,
    width: 4
  }
  game = new MagicMaze(magicMazeConfig, pawnConfig);
  game.makeGameBoard();
}
