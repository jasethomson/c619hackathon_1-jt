class Modal {
  constructor() {

  }
  createWinningDiv(){
  var winningDiv = $('<div>');
  winningDiv.text("You won!!!")
  winningDiv.addClass("youWin");
  var playAgain = $('<button>');
  playAgain.text('Play again?');
  winningDiv.append(playAgain);
  $("button").on("click", this.resetGame);
  $('body').append(winningDiv);
  }
  resetGame(event) {
    //need to add click handlers to reset game
  $('.youWin').addClass('hidden');
  $('.brawlStars').removeClass('hidden');
  }
  createLosingDiv() {
    var losingDiv = $('<div>');
    losingDiv.text("You lost!!!")
    losingDiv.addClass("youLose");
    losingDiv.addClass("hidden");

    var playAgain = $('<button>');
    playAgain.text('Play again?');
    playAgain.addClass("replayGameAfterLoss")
    losingDiv.append(playAgain);

    $('body').append(losingDiv);

    var playAgainDiv = $("<div>")
    playAgainDiv.addClass("loseReset")
    // playAgain.addClass("hidden")
    losingDiv.append(playAgainDiv);

    $(".replayGameAfterLoss").on("click", this.losingTimer);

    // this.losingCounter = 6
    // playAgainDiv.text("Game starting in " + this.losingCounter);
  }
  losingTimer() {
    $(".loseRest").removeClass("hidden")
    var losingCounter = 6;
    this.losingCountDown = setInterval(function() {
      losingCounter--;
      $(".loseReset").text("Game starting in " + losingCounter)
      if (losingCounter === 0) {
        $(".youLose").addClass("hidden");
        clearInterval(this.losingCountDown);
        return;
      }
    }, 1000)
    console.log("losing reset initiated")
  }
}
