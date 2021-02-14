const { GraphQLInt, GraphQLNonNull } = require('graphql');
const { User } = require('../../../sequelize/models');
const UserType = require('../../types/User/User');
const deleteResolver = require('../../resolvers/deleteResolverFactory');

module.exports = {
  type: UserType,
  args: {
    id: { type: GraphQLNonNull(GraphQLInt) },
  },
  resolve: deleteResolver(User),
};
