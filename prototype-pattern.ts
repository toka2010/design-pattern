/*
Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes. 


The prototype pattern is used when the Object creation is costly and requires a lot of time and resources, 
  and you have a similar Object already existing. So this pattern provides a mechanism to copy the original
  Object to a new Object and then modify it according to our needs. This pattern uses Java cloning to copy
  the Object. The prototype design pattern mandates that the Object which you are copying should provide 
  the copying feature. It should not be done by any other class. However, whether to use the shallow or
  deep copy of the object properties depends on the requirements and is a design decision.
*/

interface Prototype {
  clone(): Object;
}

export class Employee implements Prototype {
  private empList: string[];

  constructor(list: string[] = []) {
    console.log(list);

    this.empList = list;
  }

  loadData() {
    this.empList.push("A");
    this.empList.push("b");
    this.empList.push("c");
    this.empList.push("d");
  }

  add(name: string) {
    this.empList.push(name);
  }

  clone(): Employee {
    const temp: string[] = [];
    for (const emp of this.empList) {
      temp.push(emp);
    }

    return new Employee(temp);
  }
  getEmpList() {
    return this.empList;
  }
}

const employee = new Employee();
console.log(employee.getEmpList());
employee.loadData();
console.log(employee.getEmpList());
const emp1 = employee.clone();
const emp2 = employee.clone();
emp1.add("e");
console.log(employee.getEmpList());
console.log(emp1.getEmpList());
console.log(emp2.getEmpList());
