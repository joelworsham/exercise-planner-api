const { GraphQLInputObjectType } = require('graphql');
const { User } = require('../../../sequelize/models');
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
    GraphQLInputObjectType, { name, description, exclude, require },
  )(User)
);
