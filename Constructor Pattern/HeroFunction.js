function Hero(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;

  this.getDetails = function() {
    return `${this.name} can ${this.specialAbility}`
  }
}

module.exports = { Hero }