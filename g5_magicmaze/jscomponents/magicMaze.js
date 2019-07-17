

class MagicMaze {
  constructor( options, pawnOptions ) {
    this.options = options;
    this.pawnOptions = pawnOptions;

    this.boardArray = [];
    this.squareArray = [];
    this.gameBoardDom = $("#gameBoard");
    this.tileDomObject = null;
    this.getTileSourceArray();
    this.getSquareSourceArray();
  }
  getTileSourceArray() {
    var sourceArray = [];
    for (var color in this.options.pawnCounts) {
      for (var count = 0; count < this.options.pawnCounts[color]; count++) {
        sourceArray.push(color);
      }
    }
    return sourceArray;
  }
  // makeGameBoard() {
  //   // debugger;
  //   var sourceColors = this.getTileSourceArray();
  //   for (var row = 0; row < this.options.height; row++) {
  //     this.boardArray[row] = [];
  //     for (var col = 0; col < this.options.width; col++) {
  //       var location = {
  //         x: col, y: row
  //       }
  //       var tile = new Tile(location);
  //       this.boardArray[row][col] = tile;
  //       this.tileDomObject = tile.render();
  //       this.gameBoardDom.append(this.tileDomObject);
  //       this.makePawnSquares();
  //     }
  //   }
  // }



  makeGameBoard() {
    // debugger;
    var sourceColors = this.getTileSourceArray();
    for (var row = 0; row < this.options.height; row++) {
      // this.boardArray[row] = [];
      for (var col = 0; col < this.options.width; col++) {
        // var location = {
        //   x: col, y: row
        // }
        var tile = new Tile(location);
        // this.boardArray[row][col] = tile;
        this.tileDomObject = tile.render();
        this.gameBoardDom.append(this.tileDomObject);
        this.makePawnSquares();
      }
    }
  }



  getSquareSourceArray() {
    var sourceArray = [];
    for (var color in this.options.pawnCounts) {
      for (var count = 0; count < this.options.pawnCounts[color]; count++) {
        sourceArray.push(color);
      }
    }
    return sourceArray;
  }
  makePawnSquares() {
    var sourceColors = this.getSquareSourceArray();
    for (var row = 0; row < this.pawnOptions.height; row++) {
      this.squareArray[row] = [];
      for (var col = 0; col < this.pawnOptions.width; col++) {
        var location = {
          x: col, y: row
        }
        var square = new Square(location);
        this.squareArray[row][col] = square;
        var squareDomObject = square.render();
        this.tileDomObject.append(squareDomObject);
      }
    }
  }
}
