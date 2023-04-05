//-- Adding a Square class extends the Shape class and overrides the render method to create a square shape with the specified text, text color, and shape color--//
//-- The render method returns an SVG string that creates a square with the specified shapeColor and the text with the specified textColor--//
//-- The x and y attributes of the rect and text elements are set to position the text in the middle of the square--//

const Shape = require('./shape');


class Square extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); 
    }
    
    render(){
        return `<svg height="200" width="300">
        <rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="125" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}



module.exports=Square;