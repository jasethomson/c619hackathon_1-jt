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
}
