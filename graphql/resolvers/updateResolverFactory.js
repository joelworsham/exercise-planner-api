const handleUnauthed = require('../../util/graphql/handleUnauthed');
const modelUpdateItem = require('../../util/sequelize/modelUpdateItem');

/**
 * Resolver factory for "update".
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
   * Resolver for updating a Sequelize Model to the database.
   * @param _
   * @param args
   * @param context
   * @returns {Promise<*|undefined>}
   */
  async (_, args, context) => {
    if (auth && !context.isAuthenticated()) return handleUnauthed();

    return modelUpdateItem(args.id, args[Model.name.toLowerCase()], Model);
  }
);
