
class Player {
  constructor() {

    this.player = $("<div>").addClass("player player1");
    this.largeSquareX = 1;
    this.largeSquareY = 1;
    this.upandDownIndex = 1;
    this.leftandRightIndex = 1;
    this.winCondition = false;
    this.rightIndex = 1;
    this.stolenItem = false;
    this.winTheGame = false;
    // this.clickToUnhideCard = this.clickToUnhideCard.bind(this);
    this.magicMazeAccess = new MagicMaze();
    this.doorChecker = $(game.boardArray[this.largeSquareY][this.largeSquareX][0][2].domElement.contents);
    this.doorChecker.addClass("door");

    $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][1].domElement.contents).append(this.player);
    this.currentContents = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex]
    this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;

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
        case (event.keyCode == 13 && this.currentPosition == game.boardArray[1][1][0][2].location):
          this.checkDoor();
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
    if (this.upandDownIndex == -1){
      this.largeSquareY = 0;
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][3][2].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][3][2].domElement.contents).append(this.player);
      this.upandDownIndex = 3;
      this.leftandRightIndex = 2;
    }else{
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
      console.log("Up" + this.currentPosition);
    }




    return this.currentPosition;
  }
  movementDown() {
    this.upandDownIndex++;
    this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location
    $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    console.log("Down" + this.currentPosition);
    return this.currentPosition;
  }
  movementLeft() {
    this.leftandRightIndex--;
    this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
    $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    console.log("left" + this.currentPosition);
    return this.currentPosition
  }
  movementRight() {
    this.leftandRightIndex++;
    this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
    $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    console.log("right" + this.currentPosition);
    return this.currentPosition;
  }
  checkDoor(){

      this.gameBoard = $(this.doorChecker).closest("#gameBoard").find(".square:nth-child(2) .pawn:nth-child(16) .pawnContainer");
      this.gameBoard.toggleClass("door");

  }
}
class RedItem {
  constructor() {
    this.item = $(game.boardArray[1][1][0][0].domElement.contents);
    this.item.addClass("item");

  }
}

class RedExit {
  constructor() {
    this.exit = $(game.boardArray[1][1][3][3].domElement.contents);
    this.exit.addClass("exit");
    $(this.doorChecker).parent(".square").toggleClass("exit")
  }
}
