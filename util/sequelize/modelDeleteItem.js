const log = require('../../lib/log');

/**
 * Deletes an item from the database via a Sequelize Model.
 *
 * @param {String|Number} id The database ID of the item to delete.
 * @param {{}} Model The Sequelize Model to perform on.
 * @returns {Promise<{}|null>}
 */
module.exports = async (id, Model) => {
  try {
    log.debug(
      `Deleting ${Model.name} with id "${id}"...`,
      'graphql',
    );

    log.debug(`${Model.name} deleted!`, 'graphql');
    return await (await Model.findByPk(id)).destroy();
  } catch (error) {
    log.error(
      `Error deleting ${Model.name}.`,
      'graphql',
      error,
      { shouldThrow: true }, // Alert GraphQL response of error
    );
  }

  return null;
};
