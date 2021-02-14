const formatDate = require('../formatDate');

let date = new Date();

describe('Format Date', () => {
  describe('STANDARD', () => {
    it('converts to MM/DD/YYYY format', () => {
      expect(formatDate(date)).toEqual(
        expect.stringMatching(/^\d{2}\/\d{2}\/\d{4}$/)
      );
    });
  });

  describe('WITH_TIME', () => {
    it('converts to MM/DD/YYYY HH:mm:ss:SSS format', () => {
      expect(formatDate(date, 'WITH_TIME')).toEqual(
        expect.stringMatching(
          /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}:\d{3}$/
        )
      );
    });
  });

  describe('TIME', () => {
    it('converts to HH:mm:ss:SSS format', () => {
      expect(formatDate(date, 'TIME')).toEqual(
        expect.stringMatching(/^\d{2}:\d{2}:\d{2}:\d{3}$/)
      );
    });
  });
});
