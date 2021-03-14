const { GraphQLNonNull } = require('graphql');
const { Session } = require('../../../sequelize/models');
const SessionType = require('../../types/Session/Session');
const SessionInput = require('../../types/Session/SessionInputFactory');
const updateResolver = require('../../resolvers/updateResolverFactory');

module.exports = {
  type: SessionType,
  args: {
    session: {
      type: GraphQLNonNull(SessionInput(
        'UpdateSessionInput',
        { exclude: ['createdAt', 'updatedAt'], require: ['id'] },
      )),
    },
  },
  resolve: updateResolver(Session),
};
