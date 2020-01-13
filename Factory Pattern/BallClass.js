export class BallFactory {
  constructor() {
    this.createBall = function(type) {
      let ball;
      if (type === 'football' || type === 'soccer') ball = new Football();
      else if(type === 'basketball') ball = new Basketball();
      ball.roll = function() {
        return `The ${this._type} is rolling.`;
      };
      return ball;
    }
  }
}

export class Football {
  constructor() {
    this._type = 'football';
  }
  kick() {
    return 'You kicked the football.';
  }
}

export class Basketball {
  constructor() {
    this._type = 'basketball';
  }
  bounce() {
    return 'You bounced the basketball.';
  }
}