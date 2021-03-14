const { GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    currentUser: require('./auth/currentUser'),
    exercises: require('./exercise/exercises'),
    sessions: require('./session/sessions'),
    user: require('./user/user'),
    users: require('./user/users'),
  },
});
