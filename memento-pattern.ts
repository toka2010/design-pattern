/*
Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.
*/

class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
}

class Originator {
  private state: string;
  constructor(){
    this.state=''
  }
  setState(state: string) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  saveStateToMemento() {
    return new Memento(this.state);
  }

  getStateFromMemento(memento: Memento) {
    this.state = memento.getState();
  }
}

class CareTaker {
  mementoList: Memento[];
  constructor() {
    this.mementoList = [];
  }
  add(state: Memento) {
   this.mementoList.push(state);
  }
  get( index :number){
    return this.mementoList[index]
 }
}


 
const originator = new Originator();
const careTaker = new CareTaker();

originator.setState("State #1");
originator.setState("State #2");
careTaker.add(originator.saveStateToMemento());

originator.setState("State #3");
careTaker.add(originator.saveStateToMemento());

originator.setState("State #4");

    console.log("Current State: " + originator.getState());		
      
      originator.getStateFromMemento(careTaker.get(0));
      console.log("First saved State: " + originator.getState());
      originator.getStateFromMemento(careTaker.get(1));
      console.log("Second saved State: " + originator.getState())