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
  var newPlayer1 = new Player("red", 1);
  var redItem1 = new RedItem1();
  var redItem2 = new RedItem2();
  var redExit = new RedExit();

  /* for later
  var newPlayer2 = new Player("blue", 2);
  var blueItem = new BlueItem();
  var blueExit = new BlueExit(); */

  checkItem();
  var winningModal = new Modal();
  winningModal.createWinningDiv();
  winningModal.createLosingDiv();
  $(".youWin").addClass("hidden");
}
function clickToUnhideCard(event) {
  var clickCurrentTile = $(event.target);
  $(clickCurrentTile).removeClass('backOfTile');
}
function checkItem (){
  if ($("div .item") == $("div .player  ")) {
    this.winCondition = true;
    console.log('win condition', this.winCondition)
  }
}
