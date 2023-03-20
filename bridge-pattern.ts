class Shape {
  renderer: Renderer;

  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(renderer: Renderer, radius: number) {
    super(renderer);
    this.radius = radius;
  }

  draw() {
    this.renderer.renderCircle(this.radius);
  }
}

interface Renderer {
  renderCircle(radius: number): void;
}

class RasterRenderer implements Renderer {
  renderCircle(radius: number) {
    console.log(`reder  Raster cicle with radius  ${radius} `);
  }
}

class VectorRender implements Renderer {
  renderCircle(radius: number) {
    console.log(`reder  vector cicle with radios ${radius} `);
  }
}

const rasterRender = new RasterRenderer();
const circle = new Circle(rasterRender, 4);
circle.draw();
