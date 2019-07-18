
class Player {
  constructor() {

    this.player = $("<div>").addClass("player player1");
    // $(".player").css("background-color", "white");
    this.squareChild = 5;
    this.pawnChild = 7;
    this.upandDownIndex = 1;
    this.downIndex = 1;
    this.leftandRightIndex = 1;
    this.rightIndex = 1;
    this.stolenItem = false;
    this.winTheGame = false;
    // this.clickToUnhideCard = this.clickToUnhideCard.bind(this);
    this.magicMazeAccess = new MagicMaze();

    // $(".square:nth-child("+this.squareChild+") .pawn:nth-child("+this.pawnChild+") .pawnContainer").append(this.player);
    $(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player);
    // this.currentPosition = game.boardArray[1][1][this.upandDownIndex][this.leftandRightIndex];

    // this.currentPosition = game.boardArray[1][1][1][1];
    // console.log(this.currentPosition.location.x)
    // $('.pawnContainer').append(this.player);
    window.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 37:
          this.movementLeft();
          break;
        case 38:
          this.movementUp();
          break;
        case 39:
          this.movementRight();
          break;
        case 40:
          this.movementDown();
          break;
      }
    }.bind(this));
  }
  stealItem () {
    if ($(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player) === $(game.boardArray[1][1][0][0].domElement.contents).append(this.player)){
      this.stolenItem = true;
      console.log('race to the exit!', this.stolenItem);
    }
  }
  getToExit() {
    if ($(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player) === $(game.boardArray[1][1][3][3].domElement.contents).append(this.player)) {
      this.winTheGame = true;
      console.log('you win!', this.winTheGame);
    }
  }
  movementUp() {
    this.upandDownIndex--;
    $(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player);
  }
  movementDown() {
    this.upandDownIndex++;
    $(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player);
  }
  movementLeft() {
    this.leftandRightIndex--;
    $(game.boardArray[1][1][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
  }
  movementRight() {
    this.leftandRightIndex++;
    $(game.boardArray[1][1][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
  }
}
class RedItem {
  constructor() {
    this.redItem = $("<div>").addClass("item");
    // $(".square:nth-child(5) .pawn:nth-child(2) .pawnContainer").append(this.redItem)
    $(game.boardArray[1][1][0][0].domElement.contents).append(this.redItem);
  }
}

class RedExit {
  constructor() {
    this.exit = $("<div>").addClass("exit")
    // $(".square:nth-child(5) .pawn:nth-child(17) .pawnContainer").append(this.exit)
    $(game.boardArray[1][1][3][3].domElement.contents).append(this.exit);
  }
}
