interface Duck {
    quack():void;
    fly():void;
  }
  interface Turkey {
    gobble():void;
    fly():void;
  }
  
  class WildTurkey implements Turkey {
    gobble() {
      console.log("gobble");
    }
    fly() {
      console.log("i am flying for s short distance");
    }
  }
  
  class TurkeyAdaptor implements Duck {
    private turkey: WildTurkey;
    constructor(turkey: WildTurkey) {
      this.turkey = turkey;
    }
    quack() {
      this.turkey.gobble();
    }
    fly() {
      this.turkey.fly();
    }
  }
  const turkey = new WildTurkey();
  const turkeyAdaptor = new TurkeyAdaptor(turkey);
  
  turkeyAdaptor.fly();
  turkeyAdaptor.quack();
  
  
  // The Adapter Pattern converts the interface of a class
  // into another interface the clients expect. Adapter lets
  // classes work together that couldn’t otherwise because of
  // incompatible interfaces.
  