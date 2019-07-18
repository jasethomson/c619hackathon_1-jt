

class MagicMaze {
  constructor(options, pawnOptions) {
    this.options = options;
    this.pawnOptions = pawnOptions;
    this.boardArray = [];
    this.squareArray = [];
    this.realArray = [];
    // this.realArray
    this.gameBoardDom = $("#gameBoard");
    this.tileDomObject = null;
    this.row = null;
    this.col = null;
  }
  makeGameBoard() {
    // debugger;
    for (this.row = 0; this.row < this.options.height; this.row++)    {
      this.boardArray[this.row] = [];
      for (this.col = 0; this.col < this.options.width; this.col++) {
        var location = {
          x: this.col, y: this.row
        }
        var tile = new Tile(location);
        this.boardArray[this.row][this.col] = tile;
        this.tileDomObject = tile.render();
        this.gameBoardDom.append(this.tileDomObject);
        $('.squareContainer').addClass('backOfTile')
        this.makePawnSquares();
      }
    }
    $(".square:nth-child(5) .squareContainer").removeClass("backOfTile");
  }
  makePawnSquares() {
    // debugger;
    for (var row2 = 0; row2 < this.pawnOptions.height; row2++) {
      this.boardArray[this.row][this.col][row2] = [];
      for (var col2 = 0; col2 < this.pawnOptions.width; col2++) {
        var location = {
          x: col2, y: row2
        }
        var square = new Square(location);
        this.boardArray[this.row][this.col][row2][col2] = square;
        var squareDomObject = square.render();
        this.tileDomObject.append(squareDomObject);
      }
    }
  }
}
