interface ItemElement {
  accept(visit: Visitor): void;
}

export class Book implements ItemElement {
  accept(visit: Visitor): void {
    visit.visitB(this);
  }
}
export class Food implements ItemElement {
  accept(visit: Visitor): void {
    visit.visitf(this);
  }
}

interface IVisitor {
  visitB(book: Book): void;
  visitf(food: Food): void;
}

class Visitor implements IVisitor {
  visitB(book: Book) {
    console.log("visit book now ");
  }
  visitf(food: Food) {
    console.log("visit food now ");
  }
}

const visitor = new Visitor();
const book = new Book();
const food = new Food();
book.accept(visitor);
food.accept(visitor);

/**
 * Visitor Pattern Benefits

  The benefit of this pattern is that if the logic of operation changes,
  then we need to make change only in the visitor implementation rather
  than doing it in all the item classes. Another benefit is that adding
  a new item to the system is easy, it will require change only in visitor
  interface and implementation and existing item classes will not be affected.
 

  _______________________________

  
  Visitor design pattern is one of the behavioral design patterns.
  It is used when we have to perform an operation on a group of similar kind of Objects.
  With the help of visitor pattern, we can move the operational logic from the objects to another class



 */
