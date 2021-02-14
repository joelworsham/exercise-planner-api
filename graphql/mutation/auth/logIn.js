const { GraphQLNonNull, GraphQLString } = require('graphql');
const AuthResponse = require('../../types/Auth/AuthResponse');

module.exports = {
  type: AuthResponse,
  args: {
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { email, password }, context) => {
    const { user } = await context.authenticate('graphql-local', { email, password });

    await context.login(user);

    return { user };
  },
};
