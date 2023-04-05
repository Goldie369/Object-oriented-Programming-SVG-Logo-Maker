//-- Adding a Triangle class hat extends the Shape class--//
//-- he Triangle class has a constructor that takes three parameters: text, textColor, and shapeColor--//
//-- The Triangle class has a render method that returns an SVG string--//
//-- The triangle is defined using the <polygon> element, with the points attribute--//
//-- Finally, the Triangle class is exported using module.exports--//

const Shape = require('./shape');

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg height="200" width="300">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
      <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = Triangle;