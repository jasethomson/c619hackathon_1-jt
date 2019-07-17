

class Player{
  constructor() {
    this.player = $("<div>").addClass("player player1");
    // $(".player").css("background-color", "white");

    $(".squareCell:nth-child(5) .pawnCell:nth-child(7) .pawnCellContents").append(this.player);


    // this.startingPoint = startingPoint;
  }

}
