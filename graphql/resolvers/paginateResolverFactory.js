const handleUnauthed = require('../../util/graphql/handleUnauthed');

/**
 * Produces a paginated resolver.
 *
 * @param {Model} Model Sequelize Model to create for
 * @param {Object} options? Configurable options
 * @param {String} options.paginationDirection Direction of pagination [forwards or backwards]
 * @param {Boolean} options.auth If false, bypasses auth.
 * @param {String} options.whereArg Key of the "where" arg from the query args.
 * @param {Function} options.findMethod Method used to find results on the model.
 */
module.exports = (
  Model,
  {
    paginationDirection = 'forwards',
    whereArg = undefined,
    findMethod = undefined,
    auth = true,
  } = {},
) => (
  /**
   * Resolves the query to a list of items.
   *
   * @param {Object} _root The current object being created.
   * @param {Object} args Arguments from the query/mutation.
   * @param {Object} context HTTP context.
   * @param {Object} info GraphQL query information.
   * @returns {Promise<{cursors: *, results: *}>}
   */
  async (_root, args, context, info) => {
    if (auth && !context.isAuthenticated()) return handleUnauthed();

    const {
      first = 10,
      last = 10,
      after,
      before,
    } = args;

    const queryArgs = {
      where: args[whereArg || Model.name.toLowerCase()],
    };

    // Add forwards OR backwards pagination args
    if (paginationDirection === 'forwards') {
      queryArgs.limit = first;
      queryArgs.after = after;
    } else if (last > 0) {
      queryArgs.limit = last;
      queryArgs.before = before;
    }

    const { results, cursors } = await Model.paginate(queryArgs, {
      // Allows for a specific or custom Model find method. E.G. Distillery.getWhiskeys()
      method: findMethod
        ? (paginateArgs) => (
          findMethod(paginateArgs, _root, args, context, info)
        )
        : undefined,
    });

    return {
      results,
      cursors: results ? cursors : null,
    };
  }
);
