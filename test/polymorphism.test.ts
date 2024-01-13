describe('Polymorphism', () => {
  class Employee {
    constructor(public name: string){

    }
  }

  class Manager extends Employee {

  }

  class VicePresident extends Manager {
    
  }

  function sayHello(employee: Employee): void {
    // console.info(`Hello ${employee.name}`);
    if (employee instanceof VicePresident)  {
      const vp = employee as VicePresident;
      console.info(`Hello employee ${vp.name}`);
    }else if(employee instanceof Manager){
      const manager = employee as Manager;
      console.info(`Hello employee ${manager.name}`);
    }else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager)  {
      const manager = employee as VicePresident;
      console.info(`Hello employee ${manager.name}`);
    }else if(employee instanceof VicePresident){
      const vp = employee as Manager;
      console.info(`Hello employee ${vp.name}`);
    }else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  it('should support', () => {
    let employee: Employee =  new Employee("Jefry");
    console.info(employee);
    
    employee = new Manager("Juki");
    console.info(employee);

    employee = new VicePresident("Juki");
    console.info(employee);
    
  });

  it('should support method parameter polymorphism', () => {
    sayHello(new Employee("Juki"));
    sayHello(new Manager("Bambang"));
    sayHello(new VicePresident("Paijo"));
  });

  it('should support method parameter polymorphism wrong', () => {
    sayHelloWrong(new Employee("Juki"));
    sayHelloWrong(new Manager("Bambang"));
    sayHelloWrong(new VicePresident("Paijo"));
  });
});