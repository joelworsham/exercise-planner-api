const { GraphQLNonNull } = require('graphql');
const { User } = require('../../../sequelize/models');
const AuthResponse = require('../../types/Auth/AuthResponse');
const UserInput = require('../../types/User/UserInputFactory');
const modelCreateItem = require('../../../util/sequelize/modelCreateItem');

module.exports = {
  type: AuthResponse,
  args: {
    user: {
      type: GraphQLNonNull(
        UserInput(
          'SignUpUserInput',
          {
            exclude: ['id', 'status', 'updatedAt', 'createdAt'],
          },
        ),
      ),
    },
  },
  resolve: async (_, { user: userState }, context) => {
    const user = await modelCreateItem(userState, User);

    await context.login(user);

    return { user };
  },
};
