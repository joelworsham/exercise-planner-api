const { GraphQLBoolean } = require('graphql');

module.exports = {
  type: GraphQLBoolean, // Even though this will not ever be returned, GraphQL requires SOMETHING
  resolve: async (_, _args, context) => (
    context.logout()
  ),
};
