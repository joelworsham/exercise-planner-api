const { GraphQLObjectType, GraphQLBoolean, GraphQLNonNull } = require('graphql');
const User = require('../User/User');

module.exports = new GraphQLObjectType({
  name: 'AuthResponse',
  description: 'An authentication response, succeed or fail, for a user.',
  fields: {
    success: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    user: {
      type: User,
    },
  },
});
