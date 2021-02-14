const padDateZeros = require('./padDateZeros');

/**
 * Takes a standard DATE object, and formats it into a string.
 *
 * @param {Date} date The date object.
 * @param {String} format Format ID [STANDARD, WITH_TIME, or TIME]
 * @returns {*}
 */
module.exports = (date, format = 'STANDARD') => (
  {
    STANDARD: (_date) => (
      padDateZeros(
        {
          day: _date.getDate(),
          month: _date.getMonth() + 1,
          year: _date.getFullYear(),
        },
      )
    ),
    WITH_TIME: (_date) => (
      padDateZeros(
        {
          day: _date.getDate(),
          month: _date.getMonth() + 1,
          year: _date.getFullYear(),
        },
        {
          hours: _date.getHours(),
          minutes: _date.getMinutes(),
          seconds: _date.getSeconds(),
          milliseconds: _date.getMilliseconds(),
        },
      )
    ),
    TIME: (_date) => (
      padDateZeros(
        undefined,
        {
          hours: _date.getHours(),
          minutes: _date.getMinutes(),
          seconds: _date.getSeconds(),
          milliseconds: _date.getMilliseconds(),
        },
      )
    ),
  }[format](date)
);
