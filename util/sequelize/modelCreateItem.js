const log = require('../../lib/log');

/**
 * Creates an item in the database via a Sequelize Model.
 *
 * @param {Object} state The new state to merge into the item.
 * @param {{}} Model The Sequelize Model to perform on.
 * @returns {Promise<{}|null>}
 */
module.exports = async (state, Model) => {
  try {
    log.debug(
      `Creating ${Model.name}...`,
      'graphql',
      { json: state },
    );

    if (state === null) {
      log.debug('Empty state provided. Nothing to create.', 'graphql');

      return null;
    }
    const createdItem = await Model.create(state);

    log.debug(`${Model.name} created!`, 'graphql');

    return createdItem;
  } catch (error) {
    log.error(
      `Error creating ${Model.name}.`,
      'graphql',
      error,
      { shouldThrow: true }, // Alert GraphQL response of error
    );
  }

  return null;
};
