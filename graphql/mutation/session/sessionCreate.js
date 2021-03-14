const { GraphQLNonNull } = require('graphql');
const { Session } = require('../../../sequelize/models');
const SessionType = require('../../types/Session/Session');
const SessionInput = require('../../types/Session/SessionInputFactory');
const createResolver = require('../../resolvers/createResolverFactory');

module.exports = {
  type: SessionType,
  args: {
    session: {
      type: GraphQLNonNull(SessionInput('CreateSessionInput')),
    },
  },
  resolve: createResolver(Session),
};
