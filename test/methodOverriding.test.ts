describe('Method Overriding', () => {
  
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void{
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      // console.info(`Hello ${name}, my name is ${this.name}, I am your manager`);
      console.info("And, I am your manager"); //super method 
    }
  }

  it('should', () => {
    const employee = new Employee("Jefry");
    employee.sayHello("Budi");

    const manager = new Manager("Jefry"); //memanggil super method
    manager.sayHello("Budi");
  });
});