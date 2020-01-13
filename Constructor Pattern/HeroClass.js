export class Hero {
  constructor(name, specialAbility) {
    this._name = name;
    this._specialAbility = specialAbility;
    this.getDetails = function() {
      return `${this._name} can ${this._specialAbility}`
    }
  }
}
