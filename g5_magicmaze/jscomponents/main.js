$(document).ready(initializeApp);

var game = null;
var currentPlayer = $(".player1");
var randomItemLittleIndexX = Math.round(Math.random() * 3);
var randomItemBigIndexX = Math.round(Math.random() * 2);
var randomItemLittleIndexY = Math.round(Math.random() * 3);
var randomItemBigIndexY = Math.round(Math.random() * 2);
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
//   $('#gameContainer').on('click', clickToUnhideCard);
  var newPlayer1 = new Player("red", 1, 1, "player1",randomItemBigIndexY, randomItemBigIndexX, randomItemLittleIndexY, randomItemLittleIndexX);
  var redItem1 = new RedItem1(randomItemBigIndexY, randomItemBigIndexX, randomItemLittleIndexY, randomItemLittleIndexX);
  var redItem2 = new RedItem1(randomItemBigIndexX, randomItemBigIndexY, randomItemLittleIndexX, randomItemLittleIndexY);
  var redExit = new RedExit();

  checkItem();
  var winningModal = new Modal();
  winningModal.createWinningDiv();
  winningModal.createLosingDiv();
  $(".youWin").addClass("hidden");
}
function changePlayer(event){
  if (newPlayer1.currentPlayer == "player1"){
    newPlayer2.currentPlayer = "player2";
  }else if(newPlayer2.currentPlayer == "player2")
  newPlayer1.currentPlayer = "player1"
}

function checkItem (){
  if ($("div .item") == $("div .player  ")) {
    this.winCondition = true;
  }
}
