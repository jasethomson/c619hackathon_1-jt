$(document).ready(initializeApp);

var game = null;
var currentPlayer = $(".player1");
var randomItemLittleIndexX = Math.round(Math.random() * 3);
var randomItemBigIndexX = Math.round(Math.random() * 2);
var randomItemLittleIndexY = Math.round(Math.random() * 3);
var randomItemBigIndexY = Math.round(Math.random() * 2);
var randomExitX = Math.round(Math.random() * 2);
var randomExitY = Math.round(Math.random() * 2);
var randomExitx = Math.round(Math.random() * 3);
var randomExity = Math.round(Math.random() * 3);
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
  if (randomItemBigIndexX == randomItemBigIndexY && randomItemLittleIndexX == randomItemLittleIndexY){
    randomItemBigIndexX = Math.round(Math.random()*2);
    randomItemLittleIndexX = Math.round(Math.random()*3);
  }
  if (randomExitX == 1 && randomExitY == 1){
    randomExitX = 0;
    randomExitY = 2;
  }
  if (randomItemBigIndexX == 1 && randomItemBigIndexY == 1){
    randomItemBigIndexX = 2;
    randomItemBigIndexY = 0;
  }
  if (randomExitX == randomItemBigIndexX && randomExitY == randomItemBigIndexY && randomExitx == randomItemLittleIndexX && randomExity == randomItemLittleIndexY){
    randomExitX = 2;
    randomItemBigIndexX = 0;
  }
  if ( randomExitX == randomItemBigIndexY && randomExitY == randomItemBigIndexX && randomExitx == randomItemLittleIndexY && randomExity == randomItemLittleIndexX ){
    randomExitX = 2;
    randomItemBigIndexY = 0;
  }
  var newPlayer1 = new Player("red", 1, 1, "player1", randomItemBigIndexY, randomItemBigIndexX, randomItemLittleIndexY, randomItemLittleIndexX, randomExitY, randomExitX, randomExity, randomExitx);
  var redItem1 = new RedItem1(randomItemBigIndexY, randomItemBigIndexX, randomItemLittleIndexY, randomItemLittleIndexX);
  var redItem2 = new RedItem1(randomItemBigIndexX, randomItemBigIndexY, randomItemLittleIndexX, randomItemLittleIndexY);

  var redExit = new RedExit(randomExitY, randomExitX, randomExity, randomExitx);

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
