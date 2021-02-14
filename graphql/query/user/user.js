const UserType = require('../../types/User/User');
const { User } = require('../../../sequelize/models');
const singularQuery = require('../../../util/graphql/singularQueryFactory');

module.exports = singularQuery(
  User,
  UserType,
  {
    noneFoundMessage: (id) => `No user exists with the id: ${id}`,
  },
);
