const { GraphQLInt, GraphQLNonNull } = require('graphql');
const { Session } = require('../../../sequelize/models');
const SessionType = require('../../types/Session/Session');
const deleteResolver = require('../../resolvers/deleteResolverFactory');

module.exports = {
  type: SessionType,
  args: {
    id: { type: GraphQLNonNull(GraphQLInt) },
  },
  resolve: deleteResolver(Session),
};
