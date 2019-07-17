

class Tile {
  constructor(location) {
    this.location = location;
    this.domElement = {
      container: null,
      contents: null
    };
  }
  render() {
    this.domElement.container = $("<div>").addClass('squareCell');
    this.domElement.contents = $("<div>").addClass('squareCellContents');
    this.domElement.container.append(this.domElement.contents);
    return this.domElement.container;
  }
}