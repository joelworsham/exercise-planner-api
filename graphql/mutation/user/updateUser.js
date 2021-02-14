const { GraphQLInt, GraphQLNonNull } = require('graphql');
const { User } = require('../../../sequelize/models');
const UserType = require('../../types/User/User');
const UserInput = require('../../types/User/UserInputFactory');
const updateResolver = require('../../resolvers/updateResolverFactory');

module.exports = {
  type: UserType,
  args: {
    id: { type: GraphQLNonNull(GraphQLInt) },
    user: {
      type: GraphQLNonNull(UserInput('UpdateUserInput', { require: [] })),
    },
  },
  resolve: updateResolver(User),
};
