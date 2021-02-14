const handleUnauthed = require('../../util/graphql/handleUnauthed');
const modelDeleteItem = require('../../util/sequelize/modelDeleteItem');

/**
 * Resolver factory for "delete".
 *
 * @param {{}} Model Sequelize Model to perform on.
 * @param {Object} config
 * @param {Boolean} config.auth If false, bypasses auth.
 * @returns {function(*, *): Promise<*|undefined>}
 */
module.exports = (
  Model,
  {
    auth = true,
  } = {},
) => (
  /**
   * Resolver for deleting a Sequelize Model from the database
   * @param _
   * @param args
   * @param context
   * @returns {Promise<*|undefined>}
   */
  async (_, args, context) => {
    if (auth && !context.isAuthenticated()) return handleUnauthed();

    return modelDeleteItem(args.id, Model);
  }
);
