
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
    // this.clickToUnhideCard = this.clickToUnhideCard.bind(this);
    this.magicMazeAccess = new MagicMaze();

    // $(".square:nth-child("+this.squareChild+") .pawn:nth-child("+this.pawnChild+") .pawnContainer").append(this.player);
    $(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player);
    // this.currentPosition = game.boardArray[1][1][this.upandDownIndex][this.leftandRightIndex];

    this.currentPosition = game.boardArray[1][1][1][1];
    // console.log(this.currentPosition.location.x)
    // $('.pawnContainer').append(this.player);

    window.addEventListener('keydown', function (event) {
      console.log('Key was pressed:', this);

      switch (event.keyCode) {

        case 37:
          this.movementLeft(); // execute a function by passing parameter
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
  practice() {

    console.log(game.boardArray[1][1][1][1]);
    console.log(game.boardArray[1][1][0][1]);
  }
  movementUp() {
    debugger;
    this.upandDownIndex--;
    $(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player);

    // game.boardArray = [1][1][0][1]
    // --this.upandDownIndex ;
    // this.currentPosition = game.boardArray[1][1][--this.upandDownIndex][this.leftandRightIndex];
    // return this.currentPosition;
    // $(".square:nth-child(5) .pawn:nth-child("+this.pawnChild+") .pawnContainer").append(this.player)
  }
  movementDown() {
    // game.boardArray = [1][1][0][1]
    this.upandDownIndex++;
    $(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player);
    // $(".square:nth-child(5) .pawn:nth-child(" + this.pawnChild + ") .pawnContainer").append(this.player)
  }
  movementLeft() {
    // game.boardArray = [1][1][0][1]
    this.leftandRightIndex--;
    $(game.boardArray[1][1][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    // $(".square:nth-child(5) .pawn:nth-child(" + this.pawnChild + ") .pawnContainer").append(this.player)
  }
  movementRight() {
    // game.boardArray = [1][1][0][1]
    this.leftandRightIndex++;
    $(game.boardArray[1][1][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    // $(".square:nth-child(5) .pawn:nth-child(" + this.pawnChild + ") .pawnContainer").append(this.player)

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
