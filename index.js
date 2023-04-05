
const inquirer = require ('inquirer'); 

const fs = require ('fs'); 

const Circle = require ('./lib/circle'); 

const Triangle = require ('./lib/triangle');

const Square = require ('./lib/square');

const questions = [
   
    {
        type: 'input', 
        message: 'Enter Text for the Logo. (Must not be more than 3 characters).',
        name: 'logo',
        validate: Text, 

    }, 
    {
        type: 'input', 
        message: 'Enter a Text color.', 
        name: 'textcolor',
        validate: validHexaCode,

    }, 
    {
        type: 'list', 
        message: 'Select a shape for the Logo.', 
        name: 'shape', 
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input', 
        message: 'Enter a Shape color.', 
        name: 'shapecolor',  
        validate: validHexaCode,

    },
];


function Text(response) {
    if (!response) {
        return "Please enter a valid response"; // null
        }
    if (response.length > 3) {
        return "The logo must be between 1 to 3 characters"; // over 3 characters 
    }
    return true;
    }