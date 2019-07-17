

class Square {
  constructor(location) {
    this.location = location;
    this.domElement = {
      container: null,
      contents: null
    };
  }
  render() {
    this.domElement.container = $("<div>").addClass('pawnCell');
    this.domElement.contents = $("<div>").addClass('pawnCellContents');
    this.domElement.container.append(this.domElement.contents);
    return this.domElement.container;
  }
}
