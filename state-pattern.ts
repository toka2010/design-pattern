interface State {
  doAction(): void;
}

class TvStartState implements State {
  doAction(): void {
    console.log("tv is turned on");
  }
}

class TvStopState implements State {
  doAction(): void {
    console.log("tv is turned off");
  }
}

class TvContext implements State {
  private state: State;
  constructor(){
    this.state= new TvStopState()
  }


  setState(tvState: State) {
    this.state = tvState;
  }

  
  getState(){
    return this.state;
  }

  doAction(): void {
    this.state.doAction();
  }
}


const tvcontext=new TvContext();
const startTv= new  TvStartState()
const stopTv= new TvStopState()

tvcontext.setState(startTv);
tvcontext.doAction();


tvcontext.setState(stopTv);
tvcontext.doAction();


/*

The state pattern is a behavioral software design pattern that allows an object to alter its behavior when its internal state changes
. This pattern is close to the concept of finite-state machines. The state pattern 
can be interpreted as a strategy pattern, which is able to switch a strategy through invocations of methods defined in the pattern's interface. 

________________________

State Pattern: State pattern is used when an object changes its behavior depending on the internal state. 
It is a clean way of an Object to partially change its type or behavior at run-time.

_______________________
State Pattern: It is great when a developer wants to avoid primitive if/else statements. 
Instead of, extracting logic to separate classes and let our context object delegate the behavior 
to the methods implemented in-state class. Besides, we can leverage transitions between the states, 
where one state can alter the state of the context.