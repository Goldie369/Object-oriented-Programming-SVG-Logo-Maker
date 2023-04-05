//-- Adding a inquirer package to prompt the user for input--//
//-- Adding Circle, Triangle, and Square, from a module located at ./lib/shape.js, which are likely classes representing those shapes--//
//-- Adding SVG from a module located at ./lib/svg.js which will generate the SVG file--//

const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shape");
const SVG = require("./lib/svg");

//-- Adding a fs module's promises with user questions--//
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
  //-- Adding a inquirer prompt, which returns an object with the user's responses to the four questions--//
  //-- Adding a syntax to extract the characters, textColor, shapeType, and shapeColor properties from the returned object--//
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
    //-- Adding a shape object to the shapeColor value obtained from the user input, using the setColor method of the shape object--//
    //-- Then creates a new SVG object and sets the text and shape of the SVG using the setText and setShape methods--//
    //-- The setText method sets the text of the SVG graphic to the characters value obtained from the user input and the text color to the textColor--//
    //-- The setShape method sets the shape of the SVG graphic to the shape--//
    //-- The code calls the writeFile function to write the rendered SVG graphic to the ./logo/logo.svg file--//
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