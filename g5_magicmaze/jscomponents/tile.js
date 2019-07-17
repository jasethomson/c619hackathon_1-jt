

class Tile {
  constructor(location) {
    this.location = location;
    this.domElement = {
      container: null,
      contents: null
    };
    this.occupant = null;
  }
  addSquare(color) {
    var square = new (color);
    this.occupant = square;
    var squareDom = square.render();
    this.domElement.contents.append(squareDom);
  }
  render() {
    this.domElement.container = $("<div>").addClass('squareCell');
    this.domElement.contents = $("<div>").addClass('squareCellContents');
    this.domElement.container.append(this.domElement.contents);
    return this.domElement.container;
  }
}
