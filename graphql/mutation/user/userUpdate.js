const { GraphQLNonNull } = require('graphql');
const { User } = require('../../../sequelize/models');
const UserType = require('../../types/User/User');
const UserInput = require('../../types/User/UserInputFactory');
const updateResolver = require('../../resolvers/updateResolverFactory');

module.exports = {
  type: UserType,
  args: {
    user: {
      type: GraphQLNonNull(UserInput(
        'UpdateUserInput',
        { exclude: ['createdAt', 'updatedAt'], require: ['id'] },
      )),
    },
  },
  resolve: updateResolver(User),
};
