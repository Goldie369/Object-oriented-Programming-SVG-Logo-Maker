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
        