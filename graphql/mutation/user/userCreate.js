const { GraphQLNonNull } = require('graphql');
const { User } = require('../../../sequelize/models');
const UserType = require('../../types/User/User');
const UserInput = require('../../types/User/UserInputFactory');
const createResolver = require('../../resolvers/createResolverFactory');

module.exports = {
  type: UserType,
  args: {
    user: {
      type: GraphQLNonNull(UserInput('userCreateInput')),
    },
  },
  resolve: createResolver(User),
};
