const { Session } = require('../../../sequelize/models');
const SessionType = require('../../types/Session/Session');
const SessionInput = require('../../types/Session/SessionInputFactory');
const pluralQuery = require('../../../util/graphql/pluralQueryFactory');

module.exports = pluralQuery(
  Session,
  SessionType,
  SessionInput('SessionQueryInput', { require: [] }),
  {
    noneFoundMessage: (session) => `No sessions exist with the state: ${JSON.stringify(session)}`,
  },
);
