export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}
export interface Observer {
  update(pressure: number, temperature: number): void;
}

export interface DisplayElement {
  display(): void;
}

export class WeatherData implements Subject {
  observers: Observer[];
  private pressure: number;
  private temperature: number;

  constructor() {
    this.observers = [];
    this.pressure=0;
    this.temperature=0
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  
  }
  removeObserver(observer: Observer): void {
    const i = this.observers.indexOf(observer);
    if (i <= 0) {
      this.observers.slice(i);
    }
  }
  notifyObservers(): void {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update(this.pressure, this.temperature);
    }
  }
  setMeasurements(pressure: number, temperature: number): void {
    this.pressure = pressure;
    this.temperature = temperature;
    this.notifyObservers();
  }
}

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  temperature: number;
  pressure: number;
  weatherData: Subject;

  constructor(){
    this.pressure=0;
    this.temperature=0
    this.weatherData=new WeatherData()
  }

  display(): void {
    console.log(`temperature ${this.temperature} , pressure  ${this.pressure}`);
  }

  update(pressure: number, temperature: number): void {
    this.pressure = pressure;
    this.temperature = temperature;
    this.display();
  }
}

const weatherData = new WeatherData();
const currentCondition1 = new CurrentConditionsDisplay();
const currentCondition2 = new CurrentConditionsDisplay();
const currentCondition3 = new CurrentConditionsDisplay();

weatherData.registerObserver(currentCondition1);
weatherData.registerObserver(currentCondition3);
weatherData.registerObserver(currentCondition2);


weatherData.setMeasurements(20,10);
weatherData.setMeasurements(30,20);
weatherData.setMeasurements(40,30);

/* 
  The Observer Pattern deﬁnes a one-to-many
  dependency between objects so that when one
  object changes state, all of its dependents are
  notiﬁed and updated automatically.
  */


  /*
  you are interested in the state of an object and want to get notified whenever there is any change.
   In observer pattern, the object that watch on the state of another object are called Observer 
   and the object that is being watched is called Subject.
*/