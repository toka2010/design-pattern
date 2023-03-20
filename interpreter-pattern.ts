/*Interpreter pattern provides a way to evaluate language grammar or expression.
 This type of pattern comes under behavioral pattern. This pattern involves implementing an expression 
 interface which tells to interpret a particular context. This pattern is used in SQL parsing, symbol processing engine etc. */

interface Expresion {
  interpreter(context: string): boolean;
}

class TerminalExpression implements Expresion {
  data: string;
  constructor(date: string) {
    this.data = date;
  }

  interpreter(context: string): boolean {
    if (context.includes(this.data)) {
      return true;
    }
    return false;
  }
}

class OrExpresion implements Expresion {
  expr1: Expresion;
  expr2: Expresion;
  constructor(expr1: Expresion, expr2: Expresion) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }
  interpreter(context: string): boolean {
    return this.expr1.interpreter(context) || this.expr2.interpreter(context);
  }
}

class AndExpresion implements Expresion {
  expr1: Expresion;
  expr2: Expresion;
  constructor(expr1: Expresion, expr2: Expresion) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }
  interpreter(context: string): boolean {
    return this.expr1.interpreter(context) && this.expr2.interpreter(context);
  }
}

const expr1= new TerminalExpression("tot");
const expr2=new  TerminalExpression("lala");

const orExp=new OrExpresion(expr1,expr2);

const andexp= new AndExpresion(expr1,expr2);
console.log(
 orExp.interpreter("tot"));
 console.log(
    andexp.interpreter("tot"));

