/**
 * Title cases a string, capitalizing every first letter of every word.
 *
 * @param {String} string String to perform on
 * @returns {String} Title-case'd string
 */
module.exports = (string) => (
  string.toLowerCase().split(' ').map(
    (word) => (
      word.charAt(0).toUpperCase() + word.substring(1)
    ),
  ).join(' ')
);
