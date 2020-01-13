import { Car } from "./CarPrototype";

describe('Test Prototype Pattern', () => {
  const myCar = Object.create(Car, { owner: { value: 'John' } });

  it('should instancetiated Car object', () => {
    expect(myCar.__proto__).toEqual(Car);
  });

  it('should start myCar', () => {
    expect(myCar.start()).toBe('started');
  });

  it('should stop myCar', () => {
    expect(myCar.stop()).toBe('stopped');
  });

});