describe('Super Consctructor', () => {
  
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    departement: string;

    constructor(name: string, departement: string){
      super(name);
      this.departement = departement;
    }
  }
  it('should support', () => {
    const employee = new Employee("Jefry", "Tech");
    console.info(employee.name);
    console.info(employee.departement);
    
  });
});