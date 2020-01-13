import { BallFactory, Football, Basketball } from "./BallClass";

describe('Test Factory Pattern', () => {
  const factory = new BallFactory();
  const myFootball = factory.createBall('football')
  const myBasketball = factory.createBall('basketball')

  it('should initiate factory', () => {
    expect(factory).toBeInstanceOf(BallFactory)
  })

  it('should initiate myFootball', () => {
    expect(myFootball).toBeInstanceOf(Football)
  })

  it('should initiate myBasketball', () => {
    expect(myBasketball).toBeInstanceOf(Basketball)
  })

  it('should rolling myFootball', () => {
    expect(myFootball.roll()).toBe('The football is rolling.')
  })

  it('should rolling myBasketball', () => {
    expect(myBasketball.roll()).toBe('The basketball is rolling.')
  })

  it('should kick myFootball', () => {
    expect(myFootball.kick()).toBe('You kicked the football.')
  })

  it('should bounce myBasketball', () => {
    expect(myBasketball.bounce()).toBe('You bounced the basketball.')
  })

})