$(document).ready(initializeApp);

var game = null;
var currentPlayer = $(".player1");
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
  var newPlayer1 = new Player("red", 1, 1, "player1");
  // var newPlayer2 = new Player("blue", 2, 2, "player2");
  var redItem = new RedItem();
  var redExit = new RedExit();
  var blueItem = new BlueItem();
  var blueExit = new BlueExit();
  // if (currentPlayer == $(".player1")){
  //   newPlayer1.playerMove
  // }
  $("#greenPawn").on("click", changePlayer);
  $("#yellowPawn").on("click", changePlayer);
  $("#timerButton").on("click", startTimer);
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

function startTimer() {
  var counter = 2;
  var countDown = setInterval(function() {
    counter--;
    $("#timer").text(counter);
    if (counter === 0) {
      $(".youLose").removeClass("hidden");
      clearInterval(countDown);
      $("#timer").text("Time's Up!");
    }
  }, 500);
  console.log("timer started")
}
