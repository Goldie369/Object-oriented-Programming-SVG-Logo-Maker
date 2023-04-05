//-- Adding a class definition for an SVG object that can be used to render text and shapes in an SVG format--//
//-- The class has several methods that allow the user to set the text and shape of the SVG--//
//-- The constructor initializes two properties, "text" and "shape and they are empty strings--//
//-- The "setText" method takes two arguments, "words" and "color", and uses them to create a text element with the given words and color--//
//-- f the length of the words is greater than 3, an error is thrown--//
//-- The "setShape" method takes a shape object as an argument and uses its "render" method to create an SVG string--//
//-- The resulting SVG string is stored in the "shape" property--//
//-- The "render" method combines the "text" and "shape" properties into an SVG string, which is returned--//
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