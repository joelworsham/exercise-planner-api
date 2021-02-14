const padDateZeros = require('../padDateZeros');

describe('Padding Date Zeros', () => {
  it('pads with zeros', () => {
    expect(padDateZeros({
      day: 1,
      month: 1,
      year: 1111
    })).toBe('01/01/1111');

    expect(padDateZeros({
      day: 1,
      month: 1,
      year: 1111
    }, {
      hours: 1,
      minutes: 1,
      seconds: 1,
      milliseconds: 1
    })).toBe('01/01/1111 01:01:01:001');

    expect(padDateZeros({}, {
      hours: 1,
      minutes: 1,
      seconds: 1,
      milliseconds: 1
    })).toBe('01:01:01:001');
  });

  it('still returns padded zeros when date pieces have zeros', () => {
    expect(padDateZeros({}, {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    })).toBe('00:00:00:000');
  });
});
