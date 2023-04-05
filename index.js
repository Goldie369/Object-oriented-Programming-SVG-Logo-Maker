
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
        return "Please enter a valid response"; 
        }
    if (response.length > 3) {
        return "The logo must be between 1 to 3 characters"; 
    }
    return true;
    }

    var colorList = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgray', 'darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray', 'darkslategrey', 'darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgrey','lightgray', 'lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','teal','thistle', 'tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];  

    if (!response) {
        return "Please enter a valid colour value"; 
    }
    
    if (colorList.includes(response) || regex.test(response) ) {
        return true;
    }

    else {
        return "Please enter a valid colour value ";
    }