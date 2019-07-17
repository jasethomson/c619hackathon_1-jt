$(document).ready(initializeApp);

var game = null;
function initializeApp() {
  var magicMazeConfig = {
    height: 3,
    width: 3,
    // frogCounts: {
    //   'yellow': 10,
    //   'red': 11,
    //   'blue': 14,
    //   'brown': 21
    // }
  }
  game = new MagicMaze(magicMazeConfig);
  game.makeGameBoard();
}
