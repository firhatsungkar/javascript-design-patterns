export class OldCalculator {

  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return term1 + term2;
      case 'sub' :
        return term1 - term2;
      default:
        return NaN;
    };
  }

}

export class NewCalculator {

  add(term1, term2) {
    return term1 + term2;
  }

  sub(term1, term2) {
    return term1 - term2;
  }

}

export class CalculatorAdapter {
  constructor() {
    this._calc = new NewCalculator();
  }

  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return this._calc.add(term1, term2);
      case 'sub' :
        return this._calc.sub(term1, term2);
      default:
        return NaN;
    };
  }

}