

class Tile {
  constructor(location) {
    this.location = location;
    this.domElement = {
      container: null,
      contents: null
    };
  }
  render() {
    this.domElement.container = $("<div>").addClass('square');
    this.domElement.contents = $("<div>").addClass('squareContainer');
    this.domElement.container.append(this.domElement.contents);
    return this.domElement.container;
  }
}
