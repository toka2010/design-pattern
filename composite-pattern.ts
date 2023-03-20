/*
Composite is a structural design pattern that lets you compose objects into tree structures 
and then work with these structures as if they were individual objects.


Composite pattern is used where we need to treat a group of objects in similar way as a single object.
Composite pattern composes objects in term of a tree structure to represent part as well as whole hierarchy.
 This type of design pattern comes under structural pattern as this pattern creates a tree structure of group of objects.
*/

export interface Shape {
  draw(color: string): void;
}

export class Circle implements Shape {
  draw(color: string): void {
    console.log(`draw circle with color ${color}`);
  }
}

export class Triangle implements Shape {
  draw(color: string): void {
    console.log(`draw Triangle with color ${color}`);
  }
}

export class Drawings implements Shape {
  shapes: Shape[];
  constructor() {
    this.shapes = [];
  }

  draw(color: string): void {
    for (const shape of this.shapes) {
      shape.draw(color);
    }
  }
  add(shape: Shape) {
    this.shapes.push(shape);
  }
  clear() {
    console.log("clear shapes");
    this.shapes.splice(0);
  }
}

const tr1 = new Triangle();
const cir = new Circle();

const drawings = new Drawings();
drawings.add(tr1);
drawings.add(cir);
drawings.draw("red");

