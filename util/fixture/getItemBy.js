const log = require('../../lib/log');

/**
 * Gets a fixture item by a specified field/value.
 *
 * @param {Array} items Fixture data items.
 * @param {String} by The field to match against.
 * @param {String} where The field value to match.
 * @param {Boolean} require If true, will throw an error on fail.
 * @returns {Null|{ id: Number | *}} Fixture item that was found. Null if not found and not
 *                                   required.
 */
module.exports = (items, by, where, require = true) => {
  const foundIndex = items.findIndex((item) => item[by] === where);

  // Throw (or return null if not required) if not found
  if (foundIndex === -1) {
    const message = `Could not find seed item that matches "${by}" => "${where}".`;
    log.error(
      message,
      'seeder',
    );

    if (require) {
      process.exit(1);
    } else {
      return null;
    }
  }

  return {
    ...items[foundIndex],
    id: items[foundIndex].id || foundIndex,
  };
};
