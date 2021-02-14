/**
 * Takes date/time pieces, pads them with leading zeros, and connects them together.
 *
 * @param {Object} datePieces (Optional) The date pieces object
 * @param {Number} datePieces.day Day of the month.
 * @param {Number} datePieces.month Month of the year.
 * @param {Number} datePieces.year Day of the month.
 * @param {Object} timePieces (Optional) Time pieces object.
 * @param {Number} timePieces.hours Hour of the day.
 * @param {Number} timePieces.minutes Minutes of the hour.
 * @param {Number} timePieces.seconds Seconds of the minute.
 * @param {Number} timePieces.milliseconds Milliseconds of the second.
 * @returns {string}
 */
module.exports = (
  {
    day = undefined,
    month = undefined,
    year = undefined,
  } = {},
  {
    hours = undefined,
    minutes = undefined,
    seconds = undefined,
    milliseconds = undefined,
  } = {},
) => {
  const formattedDatePieces = [];

  if (typeof month !== 'undefined') formattedDatePieces.push(`0${month}`.slice(-2));
  if (typeof day !== 'undefined') formattedDatePieces.push(`0${day}`.slice(-2));
  if (typeof year !== 'undefined') formattedDatePieces.push(`000${year}`.slice(-4));

  const formattedTimePieces = [];

  if (typeof hours !== 'undefined') formattedTimePieces.push(`0${hours}`.slice(-2));
  if (typeof minutes !== 'undefined') formattedTimePieces.push(`0${minutes}`.slice(-2));
  if (typeof seconds !== 'undefined') formattedTimePieces.push(`0${seconds}`.slice(-2));
  if (typeof milliseconds !== 'undefined') formattedTimePieces.push(`00${milliseconds}`.slice(-3));

  return (
    `${formattedDatePieces.join('/')
    }${formattedTimePieces.length && formattedDatePieces.length ? ' ' : ''
    }${formattedTimePieces.join(':')}`
  );
};
