const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shape");
const SVG = require("./lib/svg");


const { writeFile } = require("fs").promises;

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter Text for the Logo. (Must not be more than 3 characters?",
      name: "characters",
    },
    {
      type: "input",
      message: "Enter a Text color?",
      name: "textColor",
    },
    {
      type: "list",
      message: "Select a shape for the Logo?",
      name: "shapeType",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "Enter a Shape color?",
      name: "shapeColor",
    },
  ])
  .then(({ characters, textColor, shapeType, shapeColor }) => {
    let shape;
    switch (shapeType) {
      case "circle":
        shape = new Circle();
        break;
      case "triangle":
        shape = new Triangle();
        break;
      case "square":
        shape = new Square();
        break;
    }
    shape.setColor(shapeColor);
    const svg = new SVG();
    
    svg.setText(characters, textColor);
    svg.setShape(shape);
    
    return writeFile("./logo/logo.svg", svg.render())
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((err) => console.log("This is an error", err));
  });