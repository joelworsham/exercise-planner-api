const paginate = require('../../graphql/resolvers/paginateResolverFactory');
const pluralQueryTypeFactory = require('./pluralQueryTypeFactory');
const decorateArgsWithPagination = require('./decorateArgsWithPagination');

/**
 * Creates a plural query connection.
 *
 * @param {Model} Model Sequelize Model to create for
 * @param {GraphQLObjectType} Type to create for
 * @param {GraphQLInputObjectType} QueryInput Input args object.
 * @param {Object} options? Configurable options
 * @param {String} options.name Optional name to use instead of the Model.name
 * @param {String} options.paginationDirection Direction of pagination [forwards or backwards]
 * @param {String} options.whereArg Key of the "where" arg from the query args.
 * @param {Object} options.nodeFields Extra fields to put on the node wrapper.
 * @param {Function} findMethod Method used to find results on the model.
 * @param {Function} options.noneFoundMessage Generates the error message. Is passed the where
 *                                            state as the param.
 * @param {Boolean} isConnection Defines whether this is or is not a connection.
 * @returns {{args: *, resolve: (function(Object, Object): {
 *            cursors: *, results: *
 *          }), type: GraphQLObjectType<any, any>}}
 */
module.exports = (
  Model,
  Type,
  QueryInput = undefined,
  {
    name = undefined,
    paginationDirection = undefined,
    whereArg = undefined,
    nodeFields = {},
    findMethod = undefined,
    noneFoundMessage = undefined,
    isConnection = false,
  } = {},
) => (
  {
    type: pluralQueryTypeFactory(
      Model,
      Type,
      {
        name,
        nodeFields,
        nodesName: isConnection ? 'edges' : 'nodes',
      },
    ),
    args: decorateArgsWithPagination('forwards')(
      QueryInput !== undefined
        ? {
          [Model.name.toLowerCase()]: {
            type: QueryInput,
          },
        }
        : {},
    ),
    resolve: paginate(
      Model,
      {
        paginationDirection,
        whereArg,
        noneFoundMessage,
        findMethod,
      },
    ),
  }
);
