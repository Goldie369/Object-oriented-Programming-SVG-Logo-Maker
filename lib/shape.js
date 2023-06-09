//-- Adding three classes: Shapes, Circle, Triangle, and Square--//
//-- The Shapes class has a constructor that initializes a shapeColor--//
//-- The Circle, Triangle, and Square classes extend the Shapes class--//
//-- Each of the Circle, Triangle, and Square classes has a render method that returns an SVG graphic string--//
//-- The Triangle class returns a element with three points specified by the points attribute, a class of triangle--//
//-- The Square class returns a rectangle element--//
class Shapes {
    constructor() {
      this.shapeColor = "";
    }
    setColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  }
  
  class Circle extends Shapes {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
  }
  class Triangle extends Shapes {
    render() {
      return `<polygon points="150,18 244,182 56,182" class="triangle" fill="${this.shapeColor}"/>`;
    }
  }
  class Square extends Shapes {
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"/>`;
    }
  }
  module.exports = { Circle, Triangle, Square };
  