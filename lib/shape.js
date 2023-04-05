
class Shape {
    
    constructor(text, textColor, shapeColor) {
        
        
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

        
        if (!text) {
            throw new Error("You must input logo text (up to three characters)!")
        }

        
        if (!textColor) {
            throw new Error("You must input a text colour!")
        }

        
        if (!shapeColor) {
            throw new Error("You must input a background colour for your logo!")
        }

        
        if (text.length> 3) {
            throw new Error("Text cannot exceed 3 characters!");
        }
        
        
        if (shapeColor == textColor) {
            throw new Error("The text and shape colours can't be the same!")
        }
    };
    
    render(){}
};



module.exports = Shape; 