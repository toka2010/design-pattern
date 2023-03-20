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
    abstract getShape():Shape;
    abstract getRoundedShape():Shape;
}

class RectangleShapeFactory extends AbstractShapeFactory{
    getRoundedShape(): Shape {
       return new RoundedRectangle()
    }
    getShape(): Shape {
            return new Rectangle();
 
    }
}



class SquareShapeFactory extends AbstractShapeFactory{
    getRoundedShape(): Shape {
       return new RoundedSquare
    }
    getShape(): Shape {
            return new Square();
 
    }
}






















































.


