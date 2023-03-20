/*

The Abstract Factory Pattern provides an interface
for creating families of related or dependent objects
without specifying their concrete classes.

*/

interface Shape {
    draw():void;
}

class Rectangle  implements Shape{
    draw(): void {
      console.log("draw rectangle");
      
    }
}

class RoundedRectangle  implements Shape{
    draw(): void {
      console.log("draw rounded rectangle");
      
    }
}


class Square  implements Shape{
    draw(): void {
      console.log("draw Square");
      
    }
}

class RoundedSquare  implements Shape{
    draw(): void {
      console.log("draw rounded Square");
      
    }
}

abstract class AbstractShapeFactory{
    abstract getShape(type:string):Shape;
}

class ShapeFactory extends AbstractShapeFactory{
    getShape(type:string): Shape {
        if(type == 'rectangle'){
            return new Rectangle();
        }
        if(type == 'square'){
            return new Square();
        }
        throw new Error("Method not implemented.");
    }
}

class RoundedShapeFactory extends AbstractShapeFactory{
    getShape(type:string): Shape {
        if(type == 'rectangle'){
            return new RoundedRectangle();
        }
        if(type == 'square'){
            return new RoundedSquare();
        }
        throw new Error("Method not implemented.");
    }
}
























































.


