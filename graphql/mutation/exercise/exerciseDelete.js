const { GraphQLInt, GraphQLNonNull } = require('graphql');
const { Exercise } = require('../../../sequelize/models');
const deleteResolver = require('../../resolvers/deleteResolverFactory');

module.exports = {
  type: GraphQLInt,
  args: {
    id: { type: GraphQLNonNull(GraphQLInt) },
  },
  resolve: deleteResolver(Exercise),
};
