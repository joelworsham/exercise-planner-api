const titleCase = require('../titleCase');

describe('Title Casing', () => {
  it('title cases correctly', () => {
    expect(titleCase('how are you')).toBe('How Are You');
    expect(titleCase('Hello')).toBe('Hello');
  });
});
