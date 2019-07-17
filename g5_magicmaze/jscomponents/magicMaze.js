

class MagicMaze {
  constructor( options ) {
    this.options = options;
    this.boardArray = [];
    this.gameBoardDom = $("#gameBoard");

    this.getPawnSourceArray();
  }
  getPawnSourceArray() {
    var sourceArray = [];
    for (var color in this.options.pawnCounts) {
      for (var count = 0; count < this.options.pawnCounts[color]; count++) {
        sourceArray.push(color);
      }
    }
    return sourceArray;
  }
  makeGameBoard() {
    var sourceColors = this.getPawnSourceArray();
    for (var row = 0; row < this.options.height; row++) {
      this.boardArray[row] = [];
      for (var col = 0; col < this.options.width; col++) {
        var location = {
          x: col, y: row
        }
        var tile = new Tile(location);
        this.boardArray[row][col] = tile;
        var tileDomObject = tile.render();
        this.gameBoardDom.append(tileDomObject);
      }
    }
  }
}
