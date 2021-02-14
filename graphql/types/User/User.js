const { GraphQLObjectType } = require('graphql');
const { User } = require('../../../sequelize/models');
const createTypeFromDbModel = require('../../../util/graphql/createTypeFromDbModel');

module.exports = createTypeFromDbModel(
  GraphQLObjectType,
)(User);
