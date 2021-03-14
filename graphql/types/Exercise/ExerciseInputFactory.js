const { GraphQLInputObjectType } = require('graphql');
const { Exercise } = require('../../../sequelize/models');
const createTypeFromDbModel = require('../../../util/graphql/createTypeFromDbModel');

module.exports = (
  name,
  {
    description,
    exclude = ['id', 'createdAt', 'updatedAt'],
    require,
  } = {},
) => (
  createTypeFromDbModel(
    GraphQLInputObjectType, {
      description,
      exclude,
      isInput: true,
      name,
      require,
    },
  )(Exercise)
);
