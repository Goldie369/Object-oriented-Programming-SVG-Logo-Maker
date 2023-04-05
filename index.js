
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
        validate: logoText, 

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
