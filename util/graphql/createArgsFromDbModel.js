const { GraphQLNonNull } = require('graphql');
const decorateArgsWithPagination = require('./decorateArgsWithPagination');
const getTypeFromSequelizeAttribute = require('./getTypeFromSequelizeAttribute');

/**
 * Generates GraphQL arguments for the query, from a Sequelize Model.
 *
 * @param {Model} Model Sequelize Model to create Type from.
 * @param {Object} options? Configurable options
 * @param {Object} options.fields Extra fields to merge in.
 * @param {Array} options.exclude Model attributes to exclude from the argument object.
 * @param {Array} options.require Array of required argument keys.
 * @param {String} options.pagination Pagination direction, if desired ["forwards" or "backwards"].
 * @returns {Object}
 */
module.exports = (
  Model,
  {
    fields: extraFields = {},
    exclude = ['createdAt', 'updatedAt', 'id'],
    require = undefined,
    pagination = 'forwards',
  } = {},
) => (
  decorateArgsWithPagination(pagination)(
    Object.entries(Model.rawAttributes).reduce(
      (fields, [key, attribute]) => {
        // Excluded
        if (exclude.includes(key)) return fields;

        // Get "matching" GraphQL type for the Sequelize type
        let type = getTypeFromSequelizeAttribute(key, attribute);

        // If can't get, don't add
        if (!type) return fields;

        if (require !== undefined) {
          // If required, wrap in GraphQLNonNull type
          if (require.includes(key)) type = GraphQLNonNull(type);
        } else {
          // If non-nullable, wrap in GraphQLNonNull type
          type = attribute.allowNull === false ? GraphQLNonNull(type) : type;
        }

        return {
          ...fields,
          [key]: {
            type,
          },
        };
      },
      extraFields,
    ),
  )
);
