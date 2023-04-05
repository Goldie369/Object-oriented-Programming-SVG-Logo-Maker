class SVG {
    constructor() {
      this.text = "";
      this.shape = "";
    }
    render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${this.shape}${this.text}</svg>`;
    }
    
    setText(words, color) {
      if (words.length > 3) {
        throw new Error(
          "Please enter 3 characters or less to render a logo with text."
        );
      }
      this.text = `<text fill="${color}" font-size="40" text-anchor="middle" font-family="Verdana" x="150" y="125">${words}</text>`;
    }
    // method for setting the shape
    setShape(shape) {
      this.shape = shape.render();
    }
  }
  module.exports = SVG;