const { GraphQLObjectType } = require('graphql');
const { Session } = require('../../../sequelize/models');
const createTypeFromDbModel = require('../../../util/graphql/createTypeFromDbModel');

module.exports = createTypeFromDbModel(
  GraphQLObjectType,
)(Session);
