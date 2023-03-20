// Flyweight pattern is primarily used to reduce the number of objects created and to decrease
//  memory footprint and increase performance. This type of design pattern comes under structural
//  pattern as this pattern provides ways to decrease object count thus improving the object structure of application.

///  this example to store books  and there exists two type of books

export class BookOldWay {
  name: string;
  price: number;
  type: string;
  extraDate: string;
  constructor(name: string, price: number, type: string, extraDate: string) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.extraDate = extraDate;
  }
}

/////
// by using flyWeigt pattern we will divide the intrinsic date in seprate obj

export class BookType {
  type: string;
  extraDate: string;
  constructor(type: string, extraDate: string) {
    this.type = type;
    this.extraDate = extraDate;
  }
}

export class Book {
  name: string;
  price: number;
  bookType: BookType;
  constructor(name: string, price: number, bookType: BookType) {
    this.name = name;
    this.price = price;
    this.bookType = bookType;
  }
}
const bookType1 = new BookType("type 1", "dddd");
const bookType2 = new BookType("type 2", "cccc");
const book1 = new Book("book 1", 123, bookType1);
const book2 = new Book("book 2", 123, bookType2);
const book3 = new Book("book 3", 123, bookType1);
