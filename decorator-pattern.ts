/// decorator pattern => is just some thing you use to add additional functionlity to aclass

//the decorator pattern is a design pattern that allows behavior to be added to an individual object,
// dynamically, without affecting the behavior of other objects from the same class.
class Shape {}

class Circle extends Shape {
  redis: number;
  constructor(redis: number) {
    super();
    this.redis = redis;
  }
  toString() {
    return `this is a circle with redis ${this.redis}`;
  }
}

export class ColoredShape extends Shape {
  shape: Shape;
  color: string;
  constructor(shape: Shape, color: string) {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} with color ${this.color}`;
  }
}
const circle = new Circle(3);
console.log(circle.toString());
const greenCircle = new ColoredShape(circle, "green");
console.log(greenCircle.toString());
