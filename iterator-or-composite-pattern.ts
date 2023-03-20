///  composite Pattern  -> it's amechanism for treating  individual object or acomposition
// of objects in  a uniform manner(same interface and sam set of functions)

class Menu {
  name: string;
  price: number;
  description: string;
  constructor(name: string, description: string, price: number) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getDescription() {
    return this.description;
  }
}

export interface Iterator {
  hasNesxt(): Boolean;
  next(): Menu;
  remove(): void;
}

export class MenuIterator implements Iterator {
  menu: Menu[];
  position: number;

  constructor(menu: Menu[]) {
    this.menu = menu;
    this.position = 0;
  }

  hasNesxt(): Boolean {
    if (this.position > this.menu.length || this.menu[this.position] == null) {
      return false;
    }
    return true;
  }
  next(): Menu {
    const item: Menu = this.menu[this.position];
    ++this.position;
    return item;
  }
  remove(): void {
    if (this.position <= 0) {
      throw new Error("there is no item to delete");
    }
    if (this.menu[this.position - 1] != null) {
      for (let i = this.position - 1; i < this.menu.length - 1; i++) {
        this.menu[i] = this.menu[i + 1];
      }
      delete this.menu[this.menu.length - 1];
    }
  }
}
export class ParentMenu {
  menu: Menu[];
  constructor() {
    this.menu = [];
    this.addItem(
      "Vegetarian BLT",
      "(Fakin’) Bacon with lettuce & tomato on whole wheat",
      299
    );
    this.addItem("BLT", "Bacon with lettuce & tomato on whole wheat", 2.99);
    this.addItem(
      "Soup of the day",
      "Soup of the day, with a side of potato salad",
      3.29
    );
  }

  public addItem(name: string, description: string, price: number) {
    const menuItem = new Menu(name, description, price);
    this.menu.push(menuItem);
  }

  createIterator(): MenuIterator {
    return new MenuIterator(this.menu);
  }
}

export class OnlineMenu {
  private breackfastMenu: ParentMenu;

  constructor(breackfastMenu: ParentMenu) {
    this.breackfastMenu = breackfastMenu;
  }

  printMenu1() {
    const menuIterator: MenuIterator = this.breackfastMenu.createIterator();

    this.printMenu(menuIterator);
  }
  printMenu(iterator: MenuIterator) {
    while (iterator.hasNesxt()) {
      const menuItem = iterator.next();
      this.printMenuItem(menuItem);
    }
  }
  printMenuItem(menuItem: Menu) {
    console.log(menuItem.getName());
    console.log(menuItem.getDescription());
    console.log(menuItem.getPrice());
  }
}
const menu = new ParentMenu();
const onlineMenu = new OnlineMenu(menu);
onlineMenu.printMenu1();
