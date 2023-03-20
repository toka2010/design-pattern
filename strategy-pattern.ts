interface PaymentStrategy {
  validate(): boolean;
  pay(): void;
}

export class PaymentByCredit implements PaymentStrategy {
  private cardNumber: number;
  private cvv: number;

  constructor(cardNumber: number, cvv: number) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
  }

  validate(): boolean {
    // validate credit
    return true;
  }
  pay(): void {
    console.log("payment using credit card");
  }
}

export class PaymentByPayPal implements PaymentStrategy {
  private userName: number;
  private password: number;

  constructor(userName: number, password: number) {
    this.userName = userName;
    this.password = password;
  }

  validate(): boolean {
    /// validate paypal
    return true;
  }
  pay(): void {
    console.log("payment using paypal");
  }
}

export class ShopingCart {
  pay(paymentWay: PaymentStrategy) {
    paymentWay.pay();
  }
}

const credit = new PaymentByCredit(123, 145);
const cart = new ShopingCart();
cart.pay(credit);

/*
 the differance between  strategy and   state pattern is that Strategy Pattern is used when the whole algorithm is changed to another 
 algorithm and the client is responsible for that, whereas, in State Pattern, the class itself manages the strategy based on the state.

 ______________________
Strategy Pattern: It is great when we have multiple ways to perform the same task
 (in software language when we have multiple algorithms to perform the same operation),
  we should consider implementing the Strategy pattern. By using this pattern, we are 
  free to add/remove an algorithm because switching of these algorithms is not transparent to the application

*/
