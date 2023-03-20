class Singleton {
    private constructor() {}
    private name = "";
    private static uniqueInstance: Singleton;
  
    static getInstance() {
      if (this.uniqueInstance == null) {
        return new Singleton();
      } else {
        return this.uniqueInstance;
      }
    }
  
    display() {
      console.log("hi :(");
    }
    getName() {
      console.log(this.name);
    }
    setName(name: string) {
      this.name = name;
    }
  }
  
  class SingletonWay2 {
    private constructor() {}
    private name = "";
    private static uniqueInstance2: SingletonWay2 = new SingletonWay2();
  
    static getInstance() {
      return this.uniqueInstance2;
    }
  
    display() {
      console.log("hi :(");
    }
    getName() {
      console.log(this.name);
    }
    setName(name: string) {
      this.name = name;
    }
  }
  
  const obj = Singleton.getInstance();
  obj.display();
  obj.setName("toqa");
  obj.getName();
  const obj1 = Singleton.getInstance();
  obj.getName();
  
  // The Singleton Pattern ensures a class has only one
  // instance, and provides a global point of access to it.
  