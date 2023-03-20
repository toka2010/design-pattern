export enum Color {
  RED = "RED",
  BLUE = "BLUE",
  GREEN = "GREEN",
}

export enum size {
  LARGE = "LARGE",
  MEDION = "MEDION",
  SMALL = "SMALL",
}

export class Product {
  name: string;
  color: string;
  size: string;
  constructor(name: string, color: string, size: string) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

interface Specification {
  isSatisfied(products: Product): boolean;
}

export class BatterFilter {
  filter(products: Product[], specification: Specification) {
    return products.filter((p) => specification.isSatisfied(p));
  }
}
export class ColorSpecification implements Specification {
  private color: string;
  constructor(color: string) {
    this.color = color;
  }
  isSatisfied(product: Product): boolean {
    return product.color == this.color;
  }
}

export class SizeSpecification implements Specification {
  private size: string;
  constructor(size: string) {
    this.size = size;
  }
  isSatisfied(product: Product): boolean {
    return product.size == this.size;
  }
}
const products = [
  new Product("apple", Color.RED, size.MEDION),
  new Product("tomato", Color.RED, size.MEDION),
  new Product("waterMelon", Color.GREEN, size.LARGE),
];

const colorSpecification = new ColorSpecification(Color.RED);
console.log("filter with red color");
for (const product of new BatterFilter().filter(products, colorSpecification)) {
  console.log("red", product);
}

const sizeSpecification = new SizeSpecification(size.LARGE);
console.log("filter with large size");
for (const product of new BatterFilter().filter(products, sizeSpecification)) {
  console.log("large", product);
}
