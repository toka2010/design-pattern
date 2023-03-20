export class Person {
  streetAddress: string;
  city: string;
  postcode: string;

  constructor() {
    this.city = this.postcode = this.streetAddress = "";
  }
  toString() {
    return `this person lives at ${this.city} , ${this.streetAddress}  , ${this.postcode}`;
  }
}

export class PersonBuilder {
  person: Person;
  constructor(person = new Person()) {
    this.person = person;
  }

  getLives() {
    return new PersonAddressBuilder(this.person);
    
  }

  build() {
    return this.person;
  }
}

export class PersonAddressBuilder extends PersonBuilder {
  constructor(person = new Person()) {
    super(person);
  }

  inCity(city: string) {
    this.person.city = city;
    return this;
  }
  atStreetAddress(streetAddress: string) {
    this.person.streetAddress = streetAddress;
    return this;
  }
  withPostcode(postcode: string) {
    this.person.postcode = postcode;
    return this;
  }
}
const per = new PersonBuilder();
const person = per
  .getLives()
  .inCity("ismailia")
  .atStreetAddress("ard al gam3iat")
  .withPostcode("135")
  .build();

console.log(person.toString());


// Builder pattern aims to “Separate the construction of a complex object from its representation 
// so that the same construction process can create different representations.”