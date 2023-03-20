export abstract class CaffineBeverage {
    prepareRecipe() {
      this.boilWater();
      this.brew();
      this.pourInCup();
      if (this.customerWantsCondiments()) {
        this.addCandidate();
      }
    }
    boilWater() {
      console.log("boil water");
    }
  
    pourInCup() {
      console.log("pour in cup");
    }
    abstract brew(): void;
  
    abstract addCandidate(): void;
    customerWantsCondiments(): boolean {
      return true;
    }
  }
  
  export class Tea extends CaffineBeverage {
    info: boolean=false;
    brew() {
      console.log("brew tea");
    }
    addCandidate() {
      console.log("add suger or lemon or both");
    }
    customerWantsCondiments(): boolean {
      const answer = this.info;
      return answer;
    }
  
    getUserInfo(info: boolean) {
      this.info = info;
    }
  }
  
  export class Coffee extends CaffineBeverage {
    brew() {
      console.log("brew coffee");
    }
    addCandidate() {
      console.log("add milk");
    }
  }
  
  const tea = new Tea();
  tea.getUserInfo(true)
  tea.prepareRecipe();
  
  // The Template Method Pattern deﬁnes the skeleton (base idea )
  // of an algorithm in a method, deferring some steps to
  // subclasses. Template Method lets subclasses redeﬁne
  // certain steps of an algorithm without changing the
  // algorithm’s structure.
  
  ///  hooks =>
  // A hook is a method that is declared in the
  // abstract class, but only given an empty
  // or default implementation