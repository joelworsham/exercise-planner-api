const { GraphQLObjectType } = require('graphql');
const { Exercise } = require('../../../sequelize/models');
const createTypeFromDbModel = require('../../../util/graphql/createTypeFromDbModel');

module.exports = createTypeFromDbModel(
  GraphQLObjectType,
)(Exercise);
