const { User } = require('../../../sequelize/models');
const UserType = require('../../types/User/User');
const UserInput = require('../../types/User/UserInputFactory');
const pluralQuery = require('../../../util/graphql/pluralQueryFactory');

module.exports = pluralQuery(
  User,
  UserType,
  UserInput('UserQueryInput', { require: [] }),
  {
    noneFoundMessage: (user) => `No users exist with the state: ${JSON.stringify(user)}`,
  },
);
