const log = require('../../lib/log');

/**
 * Updates an item in the database via a Sequelize Model.
 *
 * @param {String|Number} id The database ID of the item to update.
 * @param {Object} state The new state to merge into the item.
 * @param {{}} Model The Sequelize Model to perform on.
 * @returns {Promise<{}|null>}
 */
module.exports = async (id, state, Model) => {
  try {
    log.debug(
      `Updating ${Model.name} with id "${id}"...`,
      'graphql',
      { json: state },
    );

    if (state === null) {
      log.debug('Empty state provided. Nothing to update.', 'graphql');

      return await Model.findByPk(id);
    }
    log.debug(`${Model.name} updated!`, 'graphql');

    return await (await Model.findByPk(id)).update(state);
  } catch (error) {
    log.error(
      `Error updating ${Model.name}.`,
      'graphql',
      error,
      { shouldThrow: true }, // Alert GraphQL response of error
    );
  }

  return null;
};
