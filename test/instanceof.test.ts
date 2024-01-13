describe('Instance Of', () => {

  class Employee {}
  class Manager {}

  const budi = new Employee();
  const juki = new Manager();

  it('should have problem using typeof', () => {
    console.info(typeof budi);
    console.info(typeof juki);
  });

  it('should support instanceof', () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);

    expect(juki instanceof Employee).toBe(false);
    expect(juki instanceof Manager).toBe(true);
  });
});