import {
  OldCalculator,
  NewCalculator,
  CalculatorAdapter
} from "./Calculator";

describe('Test Adapter Pattern', () => {
  const calc = new OldCalculator()

  it('should add term1 and term2 with oldCalc', () => {
    expect(calc.operations(5,2,'add')).toBe(7)
  })

  it('should sub term1 and term2 with oldCalc', () => {
    expect(calc.operations(5,2,'sub')).toBe(3)
  })

  it('should add term1 and term2 with newCalculator', () => {
    const calc = new CalculatorAdapter()
    expect(calc._calc).toBeInstanceOf(NewCalculator)
    expect(calc.operations(5,2,'add')).toBe(7)
  })

  it('should sub term1 and term2 with newCalculator', () => {
    const calc = new CalculatorAdapter()
    expect(calc._calc).toBeInstanceOf(NewCalculator)
    expect(calc.operations(5,2,'sub')).toBe(3)
  })

})