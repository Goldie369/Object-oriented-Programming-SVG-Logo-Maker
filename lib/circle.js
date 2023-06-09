//-- Adding a Circle class that extends the Shape class, which is likely defined in the ./lib/shape.js--//
//-- The Circle class has a constructor that takes three arguments: text, textColor, and shapeColor--//
//-- The Circle class also has a render method that returns an SVG graphic string for a circle shape--//
//-- The SVG graphic also includes a text element--//
const Shape = require('./shape');


class Circle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); 
    }
    
    
    render(){
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}


module.exports=Circle;

