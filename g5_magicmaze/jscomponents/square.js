

class Square {
  constructor(location) {
    this.location = location;
    this.domElement = {
      container: null,
      contents: null
    };
  }
  render() {
    debugger;
    this.domElement.container = $("<div>").addClass('pawn');
    this.domElement.contents = $("<div>").addClass('pawnContainer');
    this.domElement.container.append(this.domElement.contents);
    return this.domElement.container;
  }
}
