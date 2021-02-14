const { GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    currentUser: require('./auth/currentUser'),
    user: require('./user/user'),
    users: require('./user/users'),
  },
});
