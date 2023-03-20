class Pizza {
  constructor() {
    console.log("pizza");
  }
  prepare() {
    console.log("prepare the pizza ");
  }
  cut() {
    console.log("cut the pizza ");
  }
  bake() {
    console.log("bake the pizza");
  }
  box() {
    console.log("box the pizza ");
  }
}
class CheesePizza extends Pizza {
  constructor() {
    super();
    console.log("Cheese");
  }
}
class ShrimpPizza extends Pizza {
  constructor() {
    super();
    console.log("Shrimp");
  }
}

class FactoryClass {
  factoryMethod(type: string): Pizza {
    if (type == "cheese") {
      return new CheesePizza();
    } else if (type == "shrimp") {
      return new ShrimpPizza();
    } else {
      return new Pizza();
    }
  }
}

class PizzaStore {
  private factory: FactoryClass;
  constructor(factory: FactoryClass) {
    this.factory = factory;
  }
  order(type: string) {
    const pizza = this.factory.factoryMethod(type);
    pizza.bake();
    pizza.prepare();
    pizza.cut();
    pizza.box();
  }
}

const factory = new FactoryClass();
const order = new PizzaStore(factory);
order.order("shrimp");



/// factory pattern  provides an interface
// for creating families of related or dependent objects
// without specifying their concrete classes.

