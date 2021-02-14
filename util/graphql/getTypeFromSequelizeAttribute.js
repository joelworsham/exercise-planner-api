const { Sequelize } = require('sequelize');
const {
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLEnumType,
} = require('graphql');
const { GraphQLDate } = require('../../graphql/scalars');

let counter = 0;

/**
 * Maps Sequelize types to GraphQL types
 *
 * @param {String} name The name of the attribute.
 * @param {Object} attribute The Sequelize attribute.
 * @returns {*}
 */
module.exports = (name, attribute) => {
  // ENUM is determined via attribute validation
  if (attribute.validate && attribute.validate.isIn) {
    counter += 1;
    const isIn = Array.isArray(attribute.validate.isIn)
      ? attribute.validate.isIn
      : attribute.validate.isIn.args;
    return new GraphQLEnumType({
      name: `${attribute.Model.name}_${name}_${counter}`,
      values: isIn.reduce(
        (built, value) => ({
          ...built,
          [value]: { value },
        }),
        {},
      ),
    });
  }

  if (attribute.type instanceof Sequelize.INTEGER) return GraphQLInt;
  if (attribute.type instanceof Sequelize.TEXT) return GraphQLString;
  if (attribute.type instanceof Sequelize.FLOAT) return GraphQLFloat;
  if (attribute.type instanceof Sequelize.STRING) return GraphQLString;
  if (attribute.type instanceof Sequelize.BOOLEAN) return GraphQLBoolean;
  if (attribute.type instanceof Sequelize.DATE) return GraphQLDate;

  // TODO figure out how these Sequelize types relate to GraphQL types
  // if (Type instanceof Sequelize.VARIABLE) return ???;
  // if (Type instanceof Sequelize.NULL) return ???;
  // if (Type instanceof Sequelize.LIST) return ???;
  // if (Type instanceof Sequelize.OBJECT_FIELD) return ???;

  return undefined;
};
