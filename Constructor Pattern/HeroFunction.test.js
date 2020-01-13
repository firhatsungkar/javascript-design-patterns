const { Hero } = require('./HeroFunction')


describe('Test Constructor Pattern', () => {
  const ironman = new Hero('Iron Man', 'fly')

  it('should be initiated', () => {
    const Hero = jest.fn()
    const ironman = new Hero('Iron Man', 'fly')
    expect(Hero).toHaveBeenCalledWith('Iron Man', 'fly')
  })

  it('should be instance of Hero', () => {
    const ironman = new Hero('Iron Man', 'fly')
    expect(ironman).toBeInstanceOf(Hero)
  })

  it('should have details', () => {
    const ironman = new Hero('Iron Man', 'fly')
    expect(ironman.getDetails()).toBe('Iron Man can fly')
  })
})