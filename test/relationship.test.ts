describe('Relationship', () => {
  class Person {
    constructor (public name: string){

    }
  }

  class Customer {
    constructor(public name: string){

    }
  }

  it('should', () => {
    const person : Person = new Customer("Juki");
    console.info(person.name);
    
  })
})