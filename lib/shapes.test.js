const Shape = require('./shape'); 
const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');

//-- Adding a Shape class--//
//-- verifying that the text, textColor, and shapeColor properties of the Shape class are set correctly when an instance is created with the "rac", "white", and "black" values--//
//-- The first test verifies that the text property is set correctly by checking if it equals the string "rac"--//
//-- The second test verifies that the textColor property is set correctly by checking if it equals the string "white"--//
//-- The third test verifies that the shapeColor property is set correctly by checking if it equals the string "black"--//
    describe('Shape', () => {
        
        it('should test logo color for Shape', () => {
            const shape = new Shape("rac", "white", "black");
            expect(shape.text).toEqual("rac");
        });
        
        it('should test text color for Shape', () => {
            const shape = new Shape("rac", "white", "black");
            expect(shape.textColor).toEqual("white");
        });
        
        it('should test shape color for Shape', () => {
            const shape = new Shape("rac", "white", "black");
            expect(shape.shapeColor).toEqual("black");
        });
    })

    //-- Adding a Triangle class can render a SVG triangle shape with the specified text and colors--//
    //-- The test creates a new instance of the Triangle class with the text "rac"--//
    //-- then calls the render() method on the triangle object to get the SVG markup for the triangle shape--//
    
    describe('Triangle', () => {
        it('should create triangle shape', () => {
            const triangle = new Triangle("rac", "white", "black");
            expect(triangle.render()).toEqual(`<svg height="200" width="300">
        <polygon points="150, 18 244, 182 56, 182" fill="black"/>
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="white">rac</text>
        </svg>`)
        });
    });

    
    describe('Square', () => {
        it('should create square shape', () => {
            const square = new Square("rac", "white", "black");
            expect(square.render()).toEqual(`<svg height="200" width="300">
        <rect x="50" y="20" width="150" height="150" fill="black"/>
        <text x="125" y="115" font-size="60" text-anchor="middle" fill="white">rac</text>
        </svg>`)
        });
    });

    
    describe('Circle', () => {
        it('should create triangle shape', () => {
            const circle = new Circle("rac", "white", "black");
            expect(circle.render()).toEqual(`<svg height="200" width="300">
            <circle cx="150" cy="100" r="80" fill="black"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">rac</text>
            </svg>`)
        });
    });
