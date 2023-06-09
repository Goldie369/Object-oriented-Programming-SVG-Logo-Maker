//-- Adding a two classes SVG and three shape classes (Circle, Triangle, and Square)--//
//-- The first test verifies that the SVG element is created with the correct dimensions--//
//-- The actual output generated by the render() method of an instance of the SVG class--//
//-- The next three tests verify that instances of the Circle, Triangle, and Square--//
//-- Those tests ensure that the shape classes are generating SVG elements with the correct attributes--//
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shape");


describe("Shapes", () => {
  
  describe("element size", () => {
    it("should render a 300x200 svg element", () => {
      const createdSVG = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> </svg>`;
      const shape = new SVG();
      expect(shape.render()).toEqual(createdSVG);
    });
  });

  
  describe("circle", () => {
    it("should render a circle", () => {
      const newCircle = `<circle cx="150" cy="100" r="80" fill="blue"/>`;
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(newCircle);
    });
  });

  
  describe("triangle", () => {
    it("should render a triangle", () => {
      const newTriangle = `<polygon points="150,18 244,182 56,182" class="triangle" fill="blue"/>`;
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(newTriangle);
    });
  });

  
  describe("square", () => {
    it("should render a square", () => {
      const newSquare = `<rect x="90" y="40" width="120" height="120" fill="blue"/>`;
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(newSquare);
    });
  });
});
